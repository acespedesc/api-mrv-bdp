import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Ecoeficiencia } from "./ecoeficiencia.js";
import { EconomiaCircular } from "./circular.js";


export const Ods = sequelize.define('ods', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fin_pobreza: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    hambre_cero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    salud_bienestar: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    educacion_calidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    igualdad_genero: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    agua_limp_sanea: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    enr_ase_nocon: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    trab_dec_creeco: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    ind_ino_inf: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    reduc_desig: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    ciu_com_sos: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    prod_con_res: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    acc_por_cli: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    vida_sub: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    vida_eco_terr: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    paz_jus_instsol: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    ali_lograr_obj: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    ecoId: {
        type: DataTypes.INTEGER,
        references: {
            model: Ecoeficiencia,
            key: 'id'
        },
        
        onDelete:'CASCADE',
        
    },
    ecoCircularId: {
        type: DataTypes.INTEGER,
        references: {
            model: EconomiaCircular,
            key: 'id'
        },
        
        onDelete:'CASCADE',
        
    },
   fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    }
},
    {
        timestamps: false
    });


    
   