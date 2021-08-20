import express from 'express';
import controller from '../controllers/category.controller.js'
const router = express.Router();

router.get('/', controller.getAllCategory);

export default router