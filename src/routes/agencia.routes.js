import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createAgencia, deleteAgencia, getAgencia, updateAgencia } from '../controllers/agencia.controller.js';

const router=Router()

router.get('/agencia/:regId',authRequired, getAgencia );
router.post('/agencia',authRequired, createAgencia );
router.put('/agencia/:id', authRequired, updateAgencia);
router.delete('/agencia/:id', authRequired, deleteAgencia);


export default router