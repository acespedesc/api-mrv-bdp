import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Subcategoria } from "./subcategoria.js";



export const InvElegible = sequelize.define('inv_elegible',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    categoria:{
        type:DataTypes.STRING
    },
    indicador_efi_ener:{
        type:DataTypes.STRING
    }, 
    linea_base:{
        type:DataTypes.STRING
    },
    criterio_elegible:{
        type:DataTypes.STRING
    },
    img_elegible:{
        type : DataTypes.BLOB()
    },
    subcategoriaId:{
        type:DataTypes.INTEGER,
        references:{
            model:Subcategoria,
            key:'id',
        },
        
        onDelete:'CASCADE',
        
    },
    fecha_subida:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    }

},
{
timestamps:false    
});

