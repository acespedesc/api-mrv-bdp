import { Router } from "express";
import {getUsuarios, createUsuario, login, logout, deleteUsuario, updateUsuario} from '../controllers/usuario.controller.js';
import {authRequired} from "../middlewares/validateToken.js" 

const router=Router()

router.get('/usuario', authRequired, getUsuarios);
router.post('/usuario', createUsuario);
router.post('/login', login);
router.post('/logout', logout);
router.delete('/usuario/:id', authRequired, deleteUsuario);
router.put('/usuario/:id', updateUsuario);

export default router