import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Region } from "./region.js";



export const Agencia= sequelize.define('agencia',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    regionId:{
        type:DataTypes.INTEGER,
        references:{
            model:Region,
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
