import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createSubcategoria, deleteSubcategoria, getSubcategorias, updateSubcategoria } from '../controllers/subcategoria.controller.js';

const router=Router()

router.get('/subcategoria', authRequired, getSubcategorias );
router.post('/subcategoria',authRequired, createSubcategoria );
router.put('/subcategoria/:id', authRequired, updateSubcategoria);
router.delete('/subcategoria/:id', authRequired, deleteSubcategoria);


export default router