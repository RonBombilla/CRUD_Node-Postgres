const { Model, DataTypes } = require('sequelize');

const TABLA_PERSONA = 'persona';

class Persona extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: TABLA_PERSONA,
            modelName: 'Persona',
            timestamps: true
        }
    }
}

const PersonaSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombre'
    },
    direccion: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'direccion'
    },
    telefono: {
        allowNull: true,
        type: DataTypes.INTEGER,
        field: 'telefono'
    }
}

module.exports = {
    Persona, PersonaSchema
};