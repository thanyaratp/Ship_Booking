const { Sequelize } = require('sequelize')
const { ENV } = require('../config')

const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASS, {
    host: ENV.DB_HOST,
    dialect: 'mysql',
    logging: false,
})

module.exports = { sequelize }
