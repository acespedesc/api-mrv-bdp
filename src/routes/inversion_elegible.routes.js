import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createInvElegible, deleteInvElegible, getInversionElegible } from '../controllers/inversion_elegible.controller.js';
import multer from 'multer';

const router=Router()

const storage = multer.memoryStorage(); // Almacena el archivo en memoria (Buffer)
const upload = multer({ storage }); // Crea una instancia de multer con la configuración

router.get('/elegible/:subId', getInversionElegible)
router.post('/elegible', upload.single('img_elegible'), createInvElegible)
router.delete('/elegible/:id', deleteInvElegible);

export default router
