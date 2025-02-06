import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboardControllers";

const router = Router();

router.get("/", getDashboardMetrics); // http://localhost:8000/dashboard
// router.get("/metrics", getDashboardMetrics); // http://localhost:8000/dashboard

// server/src/routes/dashboardRoutes.ts
router.get("/health", (req, res) => {
   res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

export default router;
