const {User, Thought} = require("./models");

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
      User.findOneAndUpdate({_id: req.params.userId},{$set: req.body})
      .then((user)=> !user ? res.status(404).json({messgae: "No User with that ID, update failed"}) : res.json(user)
      ).catch((err)=> {
        res.status(500).json(err);
      })
    },

  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) => {
        if (!user) {
          res.status(400).send("ID does not exsist")
        }
        return Thought.deleteMany({ _id: { $in: user.thoughts } });
      })
      .then(() => res.json({ message: "User FOUND! Deleted from list" }))
      .catch((err) => res.status(500).json(err));
  },

    addFriend(req,res) {
      User.findOneAndUpdate(
        {_id: req.params.userId},
        { $addToSet: {friends: req.params.friendId}}
      ).then((user)=>!user ?res.status(404).json({message: "Friend ID doesn't exist"}):res.json(user)
      ).catch((err)=> res.status(500).json(err));
    },

    deleteFriend(req, res) {
      User.findOneAndUpdate({ _id: req.params.userId }, {$pull: {friends: req.params.friendId} })
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  };
    





