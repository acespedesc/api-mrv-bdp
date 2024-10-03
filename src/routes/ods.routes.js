import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js"
import { createOds, getOdsByEcoCircularId, getOdsByEcoeficienciaId } from "../controllers/ods.controller.js";

const router=Router()


router.get('/ods/:ecoId', authRequired, getOdsByEcoeficienciaId);
router.get('/odscir/:ecoCircularId', authRequired, getOdsByEcoCircularId);
router.post('/ods',authRequired, createOds);



export default router