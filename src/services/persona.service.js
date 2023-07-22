const { models } = require('../libs/sequelize');

class PersonaService {
    constructor() {}

    async find(){
        const res = await models.Persona.findAll();
        return res;
    }
}