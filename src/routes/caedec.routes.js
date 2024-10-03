import { Router } from "express";
import { createCaedec, deleteCaedec, getCaedec, updateCaedec } from '../controllers/caedec.controller.js';
import {authRequired} from "../middlewares/validateToken.js"

const router=Router()

router.get('/caedec', authRequired, getCaedec );
router.post('/caedec',authRequired, createCaedec );
router.delete('/caedec/:id', authRequired, deleteCaedec);
router.put('/caedec/:id', authRequired, updateCaedec);


export default router