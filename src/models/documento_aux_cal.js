import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { EconomiaCircular } from "../models/circular.js";

export const DocumentoAuxCal= sequelize.define('documento_aux_cal',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    }, 
    contenido:{
        type:DataTypes.BLOB()
    },
    ecoCircularId:{
        type:DataTypes.INTEGER,
        references:{
            model:EconomiaCircular,
            key:'id',
        },
        
        onDelete:'CASCADE',
        
    },
    fecha_subida:{
        type: DataTypes.DATE
    }

},
{
timestamps:false    
});
