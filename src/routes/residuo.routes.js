import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createResiduo, deleteResiduo, getResiduos, updateResiduo } from "../controllers/residuo.controller.js";



const router=Router()

router.get('/residuo', authRequired, getResiduos );
router.post('/residuo',authRequired, createResiduo );
router.put('/residuo/:id', authRequired, updateResiduo);
router.delete('/residuo/:id', authRequired, deleteResiduo);


export default router