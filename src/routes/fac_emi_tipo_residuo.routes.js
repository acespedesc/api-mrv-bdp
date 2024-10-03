import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createFacEmiTipoResiduo, deleteFacEmiTipoResiduo, getFacEmiTipoResiduo, updateFacEmiTipoResiduo } from "../controllers/fac_emi_tipo_residuo.controller.js";



const router=Router()

router.get('/fetr/:resId', authRequired, getFacEmiTipoResiduo );
router.post('/fetr',authRequired, createFacEmiTipoResiduo );
router.put('/fetr/:id', authRequired, updateFacEmiTipoResiduo);
router.delete('/fetr/:id', authRequired, deleteFacEmiTipoResiduo);

export default router