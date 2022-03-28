const router = require('express')();
const { authRoutes } = require('./auth');
const { receiptRoutes } = require('./receipt');
const {userRoutes} = require('./user');

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/receipt', receiptRoutes);

module.exports= router;