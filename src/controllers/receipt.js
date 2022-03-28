const receiptRepository = require('../repositories/receipt');
const {succesfulResponse, unSuccesfulResponse} = require('../utils/response');
const reciptController = {
    createReceipt: async(req, res)=>{
        const userData = req.body;
        try {
            const newReceipt = await receiptRepository.create(userData);
            succesfulResponse(res, newReceipt);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    getAll: async(req, res)=>{
        try {
            const receipt = await receiptRepository.findAll();
            succesfulResponse(res, receipt);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    getOne: async(req, res)=>{
        const {consecutive} = req.params
        try {
            const receipt = await receiptRepository.findByPk(consecutive);
            succesfulResponse(res, receipt);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    update: async(req, res)=>{
        const {consecutive} = req.params;
        const data = req.body;
        try {
            const receipt = await receiptRepository.edit(consecutive, data);
            succesfulResponse(res, receipt);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },
    remove: async(req, res)=>{
        const {consecutive} = req.params;

        try {
            const receipt = await receiptRepository.delete(consecutive);
            succesfulResponse(res, receipt);
        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);
        }
    },

}



module.exports = {
    reciptController
}