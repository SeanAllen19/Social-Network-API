const {User, Thought} = require("./models");

module.exports = {

    getThoughts(req,res) {
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },

    getOneThought(req,res) {
        Thought.findOne({_id: req.params.thoughtId})
        .select("-__v")
        .then((thought)=> 
        !thought ? res.status(404).json({message: "No Thought found"})
            : res.json(thought)
        ).catch((err)=> res.status(500).json(err));
    },
    createThought(req,res) {
        Thought.create(req.body)
          .then((userData) => res.json(userData))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
    },
    updateThought(req,res) {
        Thought.findOneAndUpdate({_id: req.params.thoughtId}, {$set: req.body})
        .then((user)=> !user ? res.status(404).json
        ({message: "No Thought with that ID, update failed"}) :
        res.json(user)
        ).catch((err)=> {
            res.status(500).json(err);
        })
    },
    deletethought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then(()=> res.json({message: "Thought FOUND! Deleted from list"}))
            .catch((err)=> res.status(500).json(err));
    },

}