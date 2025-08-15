import { Router } from "express";
// You are trying to import getUsers here, but it's not exported in the controller.
// This is likely causing a separate error.
import { getUsers, registerUser, loginUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);

export const userRoutes = router;