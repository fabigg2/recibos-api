const userRepository = require('../repositories/user');
const {succesfulResponse, unSuccesfulResponse} = require('../utils/response');
const userController = {
    createUser: async(req, res)=>{
        const userData = req.body;
        try {
            const newUser = await userRepository.create(userData);
            succesfulResponse(res, newUser);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    },
    getOwner: async(req, res)=>{
        try {
            const userFound = await userRepository.findDefault();
            succesfulResponse(res, userFound);
        } catch (error) {
            unSuccesfulResponse(res);
        }
    }

}



module.exports = {
    userController
}