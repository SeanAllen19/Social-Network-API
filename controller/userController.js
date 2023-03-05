const {User} = require("../models");

module.exports = {
  //grab all the users
    getUsers(req,res) {
        User.find()
        .select('-__v')
        // .populate("thoughts")
        // .populate("friends")
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    // grab one user
    getOneUser(req,res) {
      User.findOne({_id: req.params.userId})
        .select('-__v')
        // .populate('thoughts')
        // .populate('friends')
        .then((user) => 
        !user ? res.status(404).json({message: 'No user with that IDDDD'}) : res.json(user)
        )
        .catch((err)=> res.status(500).json(err))
    },
      //create new user
    createUser(req, res) {
        User.create(req.body)
          .then((userData) => res.json(userData))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },
      //update user by __id
    updateUser(req,res){
      User.findOneAndUpdate({_id: req.param.userId},{$set: req.body})
      .then((user)=> !user ? res.status(404).json({messgae: "No User with that ID"}) : res.json(user)
      ).catch((err)=> {
        res.status(500).json(err);
      })
    },

    





}