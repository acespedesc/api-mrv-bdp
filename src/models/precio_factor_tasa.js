import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const PrecioFatorTasa = sequelize.define('precio_factor_tasa', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    parametro:{
        type:DataTypes.STRING
    },
    fuente:{
        type:DataTypes.STRING 
    },
    tipo:{
        type:DataTypes.STRING 
    },
    descripcion:{
        type:DataTypes.STRING 
    },
     unidad:{
        type:DataTypes.STRING 
    },
    valor:{
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