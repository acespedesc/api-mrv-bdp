import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Subcategoria = sequelize.define('subcategoria', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    medida_estandar: {
        type: DataTypes.STRING
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