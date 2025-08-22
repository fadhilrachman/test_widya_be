import * as dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import moment from "moment";
import { sendEmail } from "../../lib/send-mail";

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(404).json({
        message:
          "The email or password you entered is incorrect. Please try again",
      });
    }

    if (!user.password) {
      return res.status(404).json({
        message:
          "The email or password you entered is incorrect. Please try again",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password as string
    );

    if (isPasswordValid) {
      const payload = {
        id: user.id,
        name: user.name,
      };

      const secret = process.env.JWT_SECRET!;

      const expiresIn = 60 * 60 * 24;

      const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
      await prisma.session.create({
        data: {
          token,
          userId: user.id,
          expiredAt: moment().add(expiresIn, "seconds").toDate(),
        },
      });
      return res.json({
        token: token,
      });
    } else {
      return res.status(403).json({
        message:
          "The email or password you entered is incorrect. Please try again",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const logout = async (req: Request, res: Response) => {
  const token = req.header("Authorization");
  try {
    const result = await prisma.$transaction(async (prisma) => {
      const session = await prisma.session.update({
        where: {
          token,
        },
        data: {
          expiredAt: moment().toDate(),
        },
      });
    });

    return res.status(200).json({ message: "Succes logout" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
