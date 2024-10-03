import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const LineaBase = sequelize.define('linea_base', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    proyecto:{
        type:DataTypes.STRING
    },
    tipo_linea_base:{
        type:DataTypes.STRING
    },
    tecnologia:{
        type:DataTypes.STRING 
    },
    tipo_tecnologia:{
        type:DataTypes.STRING 
    },
    unidad_medida:{
        type:DataTypes.STRING
    },
    medida:{
        type:DataTypes.DECIMAL
    },
    fecha_registro:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    },
    fecha_actualizacion:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    }

}, 
{
    timestamps: false // Desactiva los campos createdAt y updatedAt si no los necesitas
});