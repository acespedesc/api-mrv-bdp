import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Residuo } from "./residuo.js";

export const FacEmiTipoResiduo = sequelize.define('fac_emi_tipo_residuo',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    fuente:{
        type:DataTypes.STRING
    },
    unidad:{
        type:DataTypes.STRING
    },
    valor:{
        type:DataTypes.DECIMAL
    },
    residuoId:{
        type:DataTypes.INTEGER,
        references:{
            model:Residuo,
            key:'id',
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
timestamps:false    
});