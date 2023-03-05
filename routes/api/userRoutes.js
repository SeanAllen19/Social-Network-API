const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    updateUser

} = require('../../controller/userController');


//Get ROUTE
//api/users/:userID
router.route('/:userId').get(getOneUser);

//Post Route(create new user)
//api/users/
router.route('/').get(getUsers).post(createUser);


//update with ID
router.route('/:userId').get(getOneUser).put(updateUser);


module.exports = router;