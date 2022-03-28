const Receipt = require('../models/receipt');
const User = require('../models/user');
const { encodePassword } = require('../utils/encript.password');


const receiptRepository = {
    findAll: async () => {
        return await Receipt.findAll({
            include: [{
                model: User,
                as: 'createdBy'
            }]
        });
    },
    findByPk: async (consecutive) => {
        return await Receipt.findOne({
            where: {
                consecutive
            },
            include: [
                {
                    model: User,
                    as: 'createdBy'
                }
            ]
        });
    },
    edit: async (uid, data) => {
        const receipt = await Receipt.findByPk(uid);
        receipt.update(data);
        return await receipt.save();
    },
    create: async (data) => {
        console.log(data);
        const newReceipt = new Receipt(data);
        return await newReceipt.save();
    },
    delete: async (rid) => {
        const receipt = await Receipt.findByPk(rid);
        return await receipt.destroy();
    }

}


module.exports = receiptRepository;