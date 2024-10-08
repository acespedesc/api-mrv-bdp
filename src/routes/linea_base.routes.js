import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createLineaBase, deleteLineaBase, getLineaBase, updateLineaBase } from "../controllers/linea_base.controller.js";


import { LineaBase } from "../models/linea_base.js";
import { sequelize } from '../config/database.js';

const router = Router()

router.get('/linea', authRequired, getLineaBase);
router.post('/linea', authRequired, createLineaBase);
router.put('/linea/:id', authRequired, updateLineaBase);
router.delete('/linea/:id', authRequired, deleteLineaBase);

const registros = [
    { proyecto: 'EBSB_CET', tipo_linea_base: 'General', tecnologia: 'Sistema de Bombeo Solar', tipo_tecnologia: 'Horas de operación anual', unidad_medida: ' Horas', medida: 4380 },
    { proyecto: 'EBSB_CUKWP', tipo_linea_base: 'Mercado Alta eficiencia', tecnologia: 'Sistema de Bombeo Solar', tipo_tecnologia: 'Costo unitario por kWp instalado', unidad_medida: 'USD/W', medida: 3.07 },
    { proyecto: 'EBSB_VUT', tipo_linea_base: 'General', tecnologia: 'Sistema de Bombeo Solar', tipo_tecnologia: 'Vida útil', unidad_medida: 'Años', medida: 15 },
    { proyecto: 'EBCA_LBG_CS_CEA', tipo_linea_base: 'General', tecnologia: 'Calefón Solar', tipo_tecnologia: 'Calor Especifico del Agua(MRV-LíneaBase!C75)', unidad_medida: 'kJ/kg-°C', medida: 4186 },
    { proyecto: 'EBCA_LBG_CS_VU', tipo_linea_base: 'General', tecnologia: 'Calefón Solar ', tipo_tecnologia: 'Vida Útil( MRV-LíneaBase!D75)', unidad_medida: 'años', medida: 20 },
    { proyecto: 'EBSB_PER', tipo_linea_base: 'Mercado Alta eficiencia', tecnologia: 'Sistema de Bombeo Solar', tipo_tecnologia: 'Potencia del equipo representativo', unidad_medida: 'kW', medida: 1.5 },
    { proyecto: 'EBFV_AB', tipo_linea_base: 'Mercado Alta eficiencia', tecnologia: 'Sistemas Solares', tipo_tecnologia: 'Autoconsumo con Baterías', unidad_medida: 'USD/kWp', medida: 2250 },
    { proyecto: 'EBFV_GD', tipo_linea_base: 'Mercado Alta eficiencia', tecnologia: 'Sistemas Solares', tipo_tecnologia: 'Generación Distribuida', unidad_medida: 'USD/kWp', medida: 1500 },
    { proyecto: 'EBFV_GSEA', tipo_linea_base: 'General', tecnologia: 'Sistemas Solares', tipo_tecnologia: 'Electricidad', unidad_medida: 'Años', medida: 25 },

];

router.post('/linea_base/insercion-masiva', authRequired, async (req, res) => {
    try {
        await sequelize.authenticate(); // Conectar a la base de datos
        await LineaBase.bulkCreate(
            registros.map(registro => ({
                ...registro,
                fecha_registro: new Date(),
                fecha_actualizacion: new Date(),
            })),
            { ignoreDuplicates: true } // Ignora duplicados si es necesario
        );
        res.status(201).json({ message: 'Registros insertados correctamente.' });
    } catch (error) {
        console.error('Error al insertar registros:', error);
        res.status(500).json({ error: 'Error al insertar registros' });
    }
});


export default router