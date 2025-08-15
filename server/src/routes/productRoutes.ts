import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController";
// Correct named import
import { auth } from '../../middleware/auth';

const router = Router();

router.get("/", auth, getProducts);
router.post("/", auth, createProduct);

export const productRoutes = router;