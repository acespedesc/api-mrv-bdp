import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createPrecioFatorTasa, deletePrecioFatorTasa, getPrecioFatorTasa, updatePrecioFatorTasa } from "../controllers/precio_factor_tasa.controller.js";

const router=Router()

router.get('/pft', authRequired, getPrecioFatorTasa);
router.post('/pft',authRequired, createPrecioFatorTasa );
router.put('/pft/:id', authRequired, updatePrecioFatorTasa);
router.delete('/pft/:id', authRequired, deletePrecioFatorTasa);


export default router