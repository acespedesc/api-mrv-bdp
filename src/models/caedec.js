import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Caedec = sequelize.define('caedec', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false // Usa allowNull para campos requeridos
    },
    actividad: {
        type: DataTypes.STRING,
        allowNull: false // Usa allowNull para campos requeridos
    },
    fecha_registro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    },
    fecha_actualizacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW // Establece un valor por defecto si es necesario
    }
}, {
    timestamps: false // Desactiva los campos createdAt y updatedAt si no los necesitas
});