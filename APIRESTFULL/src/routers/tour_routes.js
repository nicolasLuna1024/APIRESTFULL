import { Router } from "express";
import { createTourController, deleteTourController, getAllToursControllers, updateTourController} from "../controllers/tour_controller.js";

const router = Router();

router.get("/tours", getAllToursControllers)

router.post("/tour",createTourController)

router.put("/tour/:id",updateTourController)

router.delete("/tour/:id",deleteTourController)





export default router;