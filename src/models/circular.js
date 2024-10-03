import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { Usuario } from "../models/usuario.js";
import { Region } from "../models/region.js";
import { Agencia } from '../models/agencia.js'
import { Caedec } from "../models/caedec.js";

export const EconomiaCircular = sequelize.define('eco_circular', {
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
    objetivo_operacion: {
        type: DataTypes.STRING
    },
    tipos_tecnologia: {
        type: DataTypes.STRING
    },
    metodo_estimacion: {
        type: DataTypes.STRING // para capital de operacion colocar comentario por defecto
    },
    destino_cap_inv_ope: {
        type: DataTypes.STRING
    },
    tipo_empresa: {
        type: DataTypes.STRING
    },
    ctd_empleos_gen: {
        type: DataTypes.INTEGER
    },
    monto_credito_mn: {
        type: DataTypes.DECIMAL
    },
    monto_credito_me: {
        type: DataTypes.DECIMAL
    },
    ctd_residuos_rec: {
        type: DataTypes.INTEGER
    },
    emision_gei_evi: {
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

EconomiaCircular.belongsTo(Usuario, { foreignKey: 'usuarioId' });
EconomiaCircular.belongsTo(Region, { foreignKey: 'regionId' });
EconomiaCircular.belongsTo(Agencia, { foreignKey: 'agenciaId' });
EconomiaCircular.belongsTo(Caedec, { foreignKey: 'caedecId' });
