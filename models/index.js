const Sequelize = require("sequelize");
const sequelize = new Sequelize('excellence', 'SA', 'Root@123', {
    host: 'localhost',
    dialect: 'mssql',
    port: '1433',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.candidate = require('./Candidate')(sequelize, Sequelize);
db.testScore = require('./TestScore')(sequelize, Sequelize);


module.exports = db;
