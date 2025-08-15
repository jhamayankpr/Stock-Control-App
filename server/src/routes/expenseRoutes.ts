import { Router } from "express";
import { getExpensesByCategory } from "../controllers/expenseController";
// Correct named import
import { auth } from '../../middleware/auth';

const router = Router();

router.get("/", auth, getExpensesByCategory);

export const expenseRoutes = router;