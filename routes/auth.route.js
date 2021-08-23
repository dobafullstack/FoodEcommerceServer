import express from "express";
import controller from "../controllers/auth.controller.js";
const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/verifyToken', controller.verifyToken);

export default router;
