import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Usuario } from "../models/usuario.js";
import { Region } from "../models/region.js";
import { Agencia } from '../models/agencia.js'
import { Caedec } from "../models/caedec.js";
import { Subcategoria } from "../models/subcategoria.js"
import { InvElegible} from "../models/inversion_elegible.js"


export const Ecoeficiencia = sequelize.define('ecoeficiencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarioId: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id'
        }
    },
    regionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Region,
            key: 'id'
        }
    },
    agenciaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Agencia,
            key: 'id'
        }
    },
    nro_solicitud: {
        type: DataTypes.STRING
    },
    respaldo: {
        type: DataTypes.STRING
    },
    caedecId: {
        type: DataTypes.INTEGER,
        references: {
            model: Caedec,
            key: 'id'
        }
    },
    subcategoriaId: {
        type: DataTypes.INTEGER,
        references: {
            model: Subcategoria,
            key: 'id'
        }
    },
    inversionElegibleId: {
        type: DataTypes.INTEGER,
        references: {
            model: InvElegible,
            key: 'id'
        }
    },
    monto_inv_mn: {
        type: DataTypes.DECIMAL
    },
    monto_inv_me: {
        type: DataTypes.DECIMAL
    },
    produccion_energia_anual: {
        type: DataTypes.DECIMAL
    },
    reduccion_emisiones_anual: {
        type: DataTypes.DECIMAL
    },
    potencia_inst_sis: {
        type: DataTypes.DECIMAL
    },
    vida_util: {
        type: DataTypes.DECIMAL
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

    // Definir las relaciones
Ecoeficiencia.belongsTo(Usuario, { foreignKey: 'usuarioId' });
Ecoeficiencia.belongsTo(Region, { foreignKey: 'regionId' });
Ecoeficiencia.belongsTo(Agencia, { foreignKey: 'agenciaId' });
Ecoeficiencia.belongsTo(Caedec, { foreignKey: 'caedecId' });
Ecoeficiencia.belongsTo(Subcategoria, { foreignKey: 'subcategoriaId' });
Ecoeficiencia.belongsTo(InvElegible, { foreignKey: 'inversionElegibleId' });






