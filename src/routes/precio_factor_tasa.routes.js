import { Router } from "express";
import {authRequired} from "../middlewares/validateToken.js";
import { createPrecioFatorTasa, deletePrecioFatorTasa, getPrecioFatorTasa, updatePrecioFatorTasa } from "../controllers/precio_factor_tasa.controller.js";

import { PrecioFatorTasa } from "../models/precio_factor_tasa.js";
import { sequelize } from '../config/database.js';
const router=Router()

router.get('/pft', authRequired, getPrecioFatorTasa);
router.post('/pft',authRequired, createPrecioFatorTasa );
router.put('/pft/:id', authRequired, updatePrecioFatorTasa);
router.delete('/pft/:id', authRequired, deletePrecioFatorTasa);

//carga masiva precio factor tasa
const registros = [
    { parametro : 'Energía del combustible', fuente:'IPCC 2006', tipo:'Combustible', descripcion:'Gasolina', unidad:'kWh/litro de gasolina', valor:9.11},
{ parametro : 'Factor de Emisión por kWh.', fuente:'IFI Dataset of Default Grid Factors 2021(MRV-Precios,Factores yTasas!E10)', tipo:'FE_KGCO2KWH_E', descripcion:'Electricidad', unidad:'Kg CO2/kWh', valor:0.604},
{ parametro : 'Energía del combustible', fuente:'IPCC 2006', tipo:'Combustible', descripcion:'Diesel', unidad:'kWh/litro de diésel', valor:10.03},
{ parametro : 'Costo de instalación', fuente:'Determinado con estudio de mercado', tipo:'EBSB_COS_INTS', descripcion:'Sistema de Bombeo Solar', unidad:'%', valor:4.35},
{ parametro : 'Factor de emisión por kWh.', fuente:'IFI Dataset of Default Grid Factors 2021', tipo:'EBSB_FE_KW', descripcion:'Para reducción de emisiones anuales', unidad:'Kg CO2/kWh', valor:0.604},
{ parametro : 'supuestos locales de las tecnologías eficientes', fuente:'excel MRV celda( Listas!E181)', tipo:'EBCA_ECS', descripcion:'Eficiencia colector solar', unidad:'%', valor:60},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Factor de ocupación por tipo de uso(MRV-Listas!D173:E175)', tipo:'EBCA_FOTU', descripcion:'Hotel', unidad:'%', valor:60},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Factor de ocupación por tipo de uso(MRV-Listas!D173:E175)', tipo:'EBCA_FOTU', descripcion:'Residencial', unidad:'%', valor:100},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Factor de ocupación por tipo de uso(MRV-Listas!D173:E175)', tipo:'EBCA_FOTU', descripcion:'Hospital', unidad:'%', valor:60},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Numero de camas por segmento (MRV-Listas!B173:C176)', tipo:'EBCA_NCPS', descripcion:'Micro', unidad:'unidad', valor:20},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Numero de camas por segmento (MRV-Listas!B173:C176)', tipo:'EBCA_NCPS', descripcion:'PYME', unidad:'unidad', valor:75},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Numero de camas por segmento (MRV-Listas!B173:C176)', tipo:'EBCA_NCPS', descripcion:'Corporativo', unidad:'unidad', valor:200},
{ parametro : 'Valores específicos de la línea base y del proyecto', fuente:'Numero de camas por segmento (MRV-Listas!B173:C176)', tipo:'EBCA_NCPS', descripcion:'Residencial', unidad:'unidad', valor:4},
{ parametro : 'Consumo de Agua Caliente por Persona (Litros)/Dia', fuente:'Consumo de agua por persona (litros)(MRV-Listas!E179)', tipo:'EBCA_CACPLD', descripcion:'Colectores de agua Caliente', unidad:'lts/dia', valor:50},
{ parametro : 'Colectores de Agua Caliente', fuente:'Cálculos paramétricos Colectores de agua caliente(MRV-2.EB_CA_C!F17)', tipo:'EBCA_CAC_TFA', descripcion:'Temperatura Final del agua', unidad:'°C', valor:60},
{ parametro : 'Colectores de Agua Caliente', fuente:'Cálculos paramétricos Colectores de agua caliente(MRV-2.EB_CA_C!F16)', tipo:'EBCA_CAC_TIA', descripcion:'Temperatura Inicial del Agua', unidad:'°C', valor:12},
{ parametro : 'Tecnología Línea Base', fuente:'Eficiencia Caldera(MRV-Listas!D184:E187)', tipo:'EBCA_TLB_EC', descripcion:'Calefón a Diésel', unidad:'%', valor:70},
{ parametro : 'Tecnología Línea Base', fuente:'Eficiencia Caldera(MRV-Listas!D184:E187)', tipo:'EBCA_TLB_EC', descripcion:'Calefón a Gas natural', unidad:'%', valor:80},
{ parametro : 'Tecnología Línea Base', fuente:'Eficiencia Caldera(MRV-Listas!D184:E187)', tipo:'EBCA_TLB_EC', descripcion:'Calefón a GLP', unidad:'%', valor:80},
{ parametro : 'Tecnología Línea Base', fuente:'Eficiencia Caldera(MRV-Listas!D184:E187)', tipo:'EBCA_TLB_EC', descripcion:'Regaderas eléctricas', unidad:'%', valor:95},
{ parametro : 'Área por Colector Solar', fuente:'Dato Representativo(MRV-Listas!E180)', tipo:'EBCA_ACSDR_CAC', descripcion:'Colectores de Agua Caliente', unidad:'m2', valor:2.8},
{ parametro : 'Factor de Emisión del GLP', fuente:'IPCC 2006(MRV-Precios, Factores y Tasas!E15)', tipo:'EBCA_FE_GLP', descripcion:'Factor de emisión Gas Natural', unidad:'Kg CO2/kWh', valor:0.227},
{ parametro : 'Factor de Emisión del Gas Natural', fuente:'IPCC 2006(MRV-Precios, Factores y Tasas!E15)', tipo:'EBCA_FE_GN', descripcion:'Factor de emisión Gas Natural', unidad:'kg CO2/kWh', valor:0.202},
{ parametro : 'Factor de Emisión de la Gasolina', fuente:'IPCC 2006(MRV-Precios,Factores y Tasas!E13)', tipo:'FE_KGCO2LT_G', descripcion:'Gasolina', unidad:'kg CO2/litro', valor:2275},
{ parametro : 'Factor de Emisión del Diésel', fuente:'IPCC 2006(MRV-Precios,Factores y Tasa!E9)', tipo:'FE_KGCO2LT_D', descripcion:'Diesel', unidad:'kg CO2/litro', valor:267801},

];

router.post('/precio_factor_tasa/insercion-masiva', authRequired, async (req, res) => {
    try {
        await sequelize.authenticate(); // Conectar a la base de datos
        await PrecioFatorTasa.bulkCreate(
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