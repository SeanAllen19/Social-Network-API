const router = require('express').Router();

const {
    getUser,
    createUser
} = require('../../controller/userController');

router.route('/').get(getUser).post(createUser);


module.exports = router;