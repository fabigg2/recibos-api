const bcrypt = require('bcrypt');

/**
 * @description this encode a password
 * @param password type string
 */
const encodePassword = (password) => {
    const round = 10;
    const salt = bcrypt.genSaltSync(round);
    return bcrypt.hashSync(password, salt);
}




/**
 * @description compare a password with a encoded password
 * @param password User password
 * @param hast Password encoded
 * @returns boolean
 */
const compoarePassword = (password, hast) => {
    return bcrypt.compareSync(password, hast);
}

module.exports = {compoarePassword, encodePassword};