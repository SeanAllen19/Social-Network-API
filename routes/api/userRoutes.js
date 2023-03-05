const router = require('express').Router();

const {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    // deleteFriend

} = require('../../controller/userController');


//Grab(GET) user by id
//api/users/:userID
router.route('/:userId').get(getOneUser);

//Create new(POST) Route
//api/users/
router.route('/').get(getUsers).post(createUser);


//update(PUT) with ID
//api/users/:userID
router.route('/:userId').get(getOneUser).put(updateUser);

//(DELETE) with ID
router.route('/:userId').get(getOneUser).delete(deleteUser)

//POSTING a friend into a 
//ADD Friends
router.route('/:userId/friends/:friendId').post(addFriend);
// router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;