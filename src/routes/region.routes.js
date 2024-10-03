import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createRegion, deleteRegion, getRegion, updateRegion } from '../controllers/region.controller.js';

const router=Router()

router.get('/region', authRequired, getRegion );
router.post('/region',authRequired, createRegion );
router.put('/region/:id', authRequired, updateRegion);
router.delete('/region/:id', authRequired, deleteRegion);


export default router