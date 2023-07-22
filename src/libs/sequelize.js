const { Sequelize } = require(sequelize);

const { config } = require('../config/config');
const configModels =  require('../db/models');

const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgresql'
    }
);

sequelize.sync();
configModels(sequelize);

module.exports = {
    sequelize
}