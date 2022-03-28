const {sequelize} =  require('../settings/db/DB');
const {DataTypes} =  require('sequelize');
const User = require('./user');

/**
 * @swagger
 * components:
 *  schemas:
 *    Receipt:
 *      properties:
 *        consecutive:
 *          type: integer
 *        owner:
 *          type: string
 *        addres:
 *          type: string
 *        weight:
 *          type: double
 *        unitPrice:
 *          type: double
 *        price:
 *          type: double
 *        userId:
 *          type: integer
 *        state:
 *          type: string
 *      required:  
 *        - price
 *        - woner
 */

const Reciept = sequelize.define('receipts', {
    consecutive:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    owner: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addres: {
        type: DataTypes.STRING,
    },
    weight: {
        type: DataTypes.STRING,

    },
    unitPrce: {
        type: DataTypes.DOUBLE,
        field: 'unit_price',

    },
    price:{
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    state:{
        type: String,
    }
});

Reciept.belongsTo(User, {
    as: 'createdBy',
    foreignKey: {
        name: 'user_id',
    }

})


// reciptSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         const password = encodePassword(this.get('password'));
//         this.set('password', password);
//     }
//     next();
// })

module.exports= Reciept;