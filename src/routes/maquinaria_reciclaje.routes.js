import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createMaquinariaReciclaje, deleteMaquinariaReciclaje, getMaquinariaReciclaje, updateMaquinariaReciclaje } from "../controllers/maquinaria_reciclaje.controller.js";

const router=Router()

router.get('/maquinaria/:residuoId',authRequired, getMaquinariaReciclaje );
router.post('/maquinaria',authRequired, createMaquinariaReciclaje );
router.put('/maquinaria/:id', authRequired, updateMaquinariaReciclaje);
router.delete('/maquinaria/:id', authRequired, deleteMaquinariaReciclaje);


export default router