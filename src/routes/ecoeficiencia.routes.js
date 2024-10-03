import { Router } from "express";
import { createEcoeficiencia, deleteEcoeficiencia, getEcoeficiencia, getEcoeficienciaById, updateEcoeficiencia } from '../controllers/ecoeficiencia.controller.js';
import {authRequired} from "../middlewares/validateToken.js"

const router=Router()

router.get('/eco', authRequired, getEcoeficiencia );
router.get('/eco/:id', authRequired, getEcoeficienciaById);
router.post('/eco',authRequired, createEcoeficiencia);
router.delete('/eco/:id', authRequired, deleteEcoeficiencia);
router.put('/eco/:id', authRequired, updateEcoeficiencia);


export default router