import { sequelize } from "../config/database.js";
import { Subcategoria } from './subcategoria.js';
import {InvElegible} from './inversion_elegible.js'
import { Region } from './region.js';
import { Agencia } from './agencia.js';
import { FacEmiTipoResiduo } from './fac_emi_tipo_residuo.js';
import { Residuo } from './residuo.js';
import { Ecoeficiencia } from './ecoeficiencia.js'
import {Ods} from './ods.js'
import { EconomiaCircular } from "./circular.js";
import { DocumentoAuxCal} from "./documento_aux_cal.js";
import { MaquinariaReciclaje } from "./maquinaria_reciclaje.js";

// Establecer las relaciones Subcategoria uno a muchos con  InvElegible
Subcategoria.hasMany(InvElegible,{foreignKey: 'subcategoriaId'})
InvElegible.belongsTo(Subcategoria,{foreignKey:'subcategoriaId'})

// Establecer las relaciones Region uno a muchos con Agencia
Region.hasMany(Agencia,{foreignKey: 'regionId'})
Agencia.belongsTo(Region,{foreignKey:'regionId'})

// Establecer las relaciones Residuo uno a muchos con Factores emision por Tipo Residuo
Residuo.hasMany(FacEmiTipoResiduo,{foreignKey: 'residuoId'})
FacEmiTipoResiduo.belongsTo(Residuo,{foreignKey:'residuoId'})
// Establecer las relaciones Residuo uno a muchos con Maquinaria para reciclaje
Residuo.hasMany(MaquinariaReciclaje,{foreignKey: 'residuoId'})
MaquinariaReciclaje.belongsTo(Residuo,{foreignKey:'residuoId'})

Ecoeficiencia.hasMany(Ods, { foreignKey: 'ecoId' });
Ods.belongsTo(Ecoeficiencia, { foreignKey: 'ecoId' });

EconomiaCircular.hasMany(Ods, { foreignKey: 'ecoCircularId' });
Ods.belongsTo(Ecoeficiencia, { foreignKey: 'ecoCircularId' });

EconomiaCircular.hasMany(Ods, { foreignKey: 'ecoCircularId' });
DocumentoAuxCal.belongsTo(Ecoeficiencia, { foreignKey: 'ecoCircularId' });


export { Subcategoria, InvElegible, Agencia, Region, Residuo, FacEmiTipoResiduo, Ecoeficiencia, Ods, EconomiaCircular, sequelize, DocumentoAuxCal };