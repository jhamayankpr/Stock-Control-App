import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardController";
// Correct named import
import { auth } from '../../middleware/auth';

const router = Router();

router.get("/", auth, getDashboardMetrics);

export const dashboardRoutes = router;