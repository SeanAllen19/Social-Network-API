const {User, Thought} = require("./models");

module.exports = {

    getThoughts(req,res) {
        Thought.find()
        .select('-__v')
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },

    getOneThought(req,res) {
     

    },
    createThought(req,res) {

    },
    updateThought(req,res) {

    },
    deletethought(req,res) {

    },

}