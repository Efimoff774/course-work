import Router from "express";
import userController from "../controllers/userController.js";
const router = new Router();
import controller from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

export default router;
