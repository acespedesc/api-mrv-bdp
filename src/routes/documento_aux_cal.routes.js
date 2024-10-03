import { Router } from "express";
import multer from 'multer';
import { createDocumentoAuxCal, deleteDocumentoAuxCal, getDocumentoAuxCal} from "../controllers/documento_aux_cal.controller.js"

const router= Router()

const storage = multer.memoryStorage(); // Almacena el archivo en memoria (Buffer)
const upload = multer({ storage }); // Crea una instancia de multer con la configuración

router.get('/doc/:ecoCircularId', getDocumentoAuxCal)

router.post('/doc', upload.single('contenido'), createDocumentoAuxCal)
router.delete('/doc/:id', deleteDocumentoAuxCal);

export default router