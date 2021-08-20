import express from "express";
import controller from "../controllers/food.controller.js";
const router = express.Router();

router.get("/", controller.getAllFood);
router.get("/:categoryId", controller.getFoodByCategoryId);
router.get("/detail/:foodId", controller.getFoodById);

export default router;
