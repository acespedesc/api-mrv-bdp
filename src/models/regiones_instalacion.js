import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const RegionesInstalacion = sequelize.define('regiones_instalacion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    region:{
        type:DataTypes.STRING
    },
    ghi:{
        type:DataTypes.DECIMAL
    },
    pvout:{
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