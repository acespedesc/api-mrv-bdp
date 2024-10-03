import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createLineaBase, deleteLineaBase, getLineaBase, updateLineaBase } from "../controllers/linea_base.controller.js";

const router=Router()

router.get('/linea', authRequired, getLineaBase );
router.post('/linea',authRequired, createLineaBase );
router.put('/linea/:id', authRequired, updateLineaBase);
router.delete('/linea/:id', authRequired, deleteLineaBase);


export default router