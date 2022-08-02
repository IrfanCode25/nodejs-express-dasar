import express from "express";

//import page controller
import { Home, About, Contact } from "../controllers/page.js";

//init express router
const router = express.Router();

//Home route
router.get('/', Home);

//About route
router.get('/about', About);

//Home Contact
router.get('/contact', Contact);

export default router;