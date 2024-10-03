import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import { createEconomiaCircular, deleteEconomiaCircular, getEconomiaCircular, getEconomiaCircularById } from "../controllers/circular.controller.js"

const router=Router()

router.get('/cir', authRequired, getEconomiaCircular );
router.get('/cir/:id', authRequired, getEconomiaCircularById);
router.post('/cir',authRequired, createEconomiaCircular);
router.delete('/cir/:id', authRequired, deleteEconomiaCircular);



export default router