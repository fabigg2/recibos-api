const {Router}  = require('express');
const {check} =  require('express-validator');
const {expressValidatorErrors} = require('../middlewares/globals');
const {userController} =  require('../controllers/user');

const userRoutes = Router();

userRoutes.post('/', 
[
    check('name', 'name is required').notEmpty(),
    check('lastname', 'lastname is required').notEmpty(),
    check('email', 'email is invalid').isEmail(),
    check('password', 'password is invalid').notEmpty(),
    expressValidatorErrors,
], 
userController.createUser);

userRoutes.get('/', userController.getOwner);

module.exports = {userRoutes};
