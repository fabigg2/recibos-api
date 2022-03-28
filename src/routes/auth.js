const {Router}  = require('express');
const {check} =  require('express-validator');
const {expressValidatorErrors} = require('../middlewares/globals');
const {auth} = require('../auth/index');
const authRoutes = Router();

authRoutes.post('/', 
[
    check('email', 'email is invalid').isEmail(),
    check('password', 'password is invalid').notEmpty(),
    expressValidatorErrors,
], 
auth.signIn);

module.exports = {authRoutes};
