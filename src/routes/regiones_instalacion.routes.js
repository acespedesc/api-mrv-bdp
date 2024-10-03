import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createRegionesInstalacion, deleteRegionesInstalacion, getRegionesInstalacion, updateRegionesInstalacion } from "../controllers/regiones_instalacion.controllers.js";

const router=Router()

router.get('/reg', authRequired, getRegionesInstalacion );
router.post('/reg',authRequired, createRegionesInstalacion );
router.put('/reg/:id', authRequired, updateRegionesInstalacion);
router.delete('/reg/:id', authRequired, deleteRegionesInstalacion);


export default router