const User = require('../models/user');
const { encodePassword } = require('../utils/encript.password');


const userRepository= {
    findAll: async()=>{
        
    },
    findDefault: async()=>{
        return await User.findOne({rol: 'OUWNER'});
    },
    findByEmail: async(email)=>{
        return await User.findOne({where:{
            email
        }});
    },
    edit: async(uid, data)=>{
        return await User.findOneAndUpdate({_id:uid}, data);
    },
    create: async(data)=>{
        data.password = encodePassword(data.password);
        const newUser = new User(data);
        return await newUser.save();
    }
}


module.exports = userRepository;