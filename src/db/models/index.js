const { Persona, PersonaSchema } = require('./persona.model');

const configModels = (sequelize) => {
    Persona.init(PersonaSchema, Persona.config(sequelize));
}

module.exports = {
    configModels
}