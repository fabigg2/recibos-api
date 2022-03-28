const {Sequelize} = require('sequelize');
const HOST = process.env.DB_HOST;
const DB = process.env.DB_NAME;
const USER  = process.env.DB_USER;
const PASSWROD  = process.env.DB_PASSWORD;
const sequelize = new Sequelize(DB,USER,PASSWROD,{
    dialect: 'mysql',
    host: HOST,
    port: 3306
})

const connect = async() => {
    try {
        await sequelize.authenticate();
        console.log('db connected');
    } catch (error) {
        console.log('error, db no connected', error);
        
    }
}



module.exports =  {sequelize, connect};