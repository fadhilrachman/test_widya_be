import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { createPagination } from "../../lib/helper";
const prisma = new PrismaClient();

export const getVehicle = async (req: Request, res: Response) => {
  //   const user = req.user;
  const { page = 1, perPage = 10, search = "" } = req.query;
  const pageNum = Number(page);
  const perPageNum = Number(perPage);
  const skip = (pageNum - 1) * perPageNum;
  try {
    const data = await prisma.vehicle.findMany({
      skip,
      take: Number(perPageNum),
      where: {
        name: {
          contains: search as string,
          mode: "insensitive",
        },
      },
    });

    const count = await prisma.vehicle.count();
    const pagination = createPagination({
      page: pageNum,
      perPage: perPageNum,
      total_data: count,
    });

    return res.status(200).json({
      data,
      pagination,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createVehicle = async (req: Request, res: Response) => {
  const { name, numberPlate, userId } = req.body;

  try {
    await prisma.vehicle.create({
      data: {
        name,
        numberPlate,
        userId,
      },
    });

    return res.status(200).json({
      message: "Succes create vehicle",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
