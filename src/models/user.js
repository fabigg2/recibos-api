const {sequelize} =  require('../settings/db/DB');
const {DataTypes} =  require('sequelize');


/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      properties:
 *        name:
 *          type: string
 *        lastname:
 *          type: string
 *        eamil:
 *          type: double
 *        password:
 *          type: double
 *      required:  
 *        - name
 *        - lastname
 *        - email
 *        - password
 */

const User = sequelize.define('users', {
    uid:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{timestamps: false});


// User.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         const password = encodePassword(this.get('password'));
//         this.set('password', password);
//     }
//     next();
// })

module.exports= User;