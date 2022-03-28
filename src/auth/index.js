const { compare } = require("bcrypt");
const { findByEmail } = require("../repositories/user");
const { compoarePassword } = require("../utils/encript.password");
const { succesfulResponse, unSuccesfulResponse } = require("../utils/response");
const { genToken } = require("../utils/token");

const auth = {
    signIn: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await findByEmail(email);
            if (user) {
                if (compoarePassword(password, user.password)) {
                        token = genToken({uid:user._id});
                    return succesfulResponse(res, {user, token});
                }
            }
            unSuccesfulResponse(res, {err: 'user or password incorrect'},400)

        } catch (error) {
            console.log(error);
            unSuccesfulResponse(res);

        }

    }
};


module.exports = { auth }