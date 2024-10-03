import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

export const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false // Usa allowNull para campos requeridos
    },
    apellido_paterno: {
        type: DataTypes.STRING,
        allowNull: false // Usa allowNull para campos requeridos
    },
    apellido_materno: {
        type: DataTypes.STRING,
        allowNull: false // Usa allowNull para campos requeridos
    },
    nro_documento: {
        type: DataTypes.STRING,
        allowNull: false // Usa allowNull para campos requeridos
    },
    usuario: {
        type: DataTypes.STRING,
        unique: true,    // Usa unique para que el usuario sea unico
        allowNull: false // Usa allowNull para campos requeridos
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,    // Usa unique para que el correo sea unico
        allowNull: false // Usa allowNull para campos requeridos
    },
    contraseña: {
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