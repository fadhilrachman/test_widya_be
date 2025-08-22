import express from "express";
import { login, logout } from "../controllers/auth.controller";

const router = express();

router.post("/auth/login", login);
router.post("/auth/logout", logout);
// router.post("/auth/verified-email", verifiedEmail);

export default router;
