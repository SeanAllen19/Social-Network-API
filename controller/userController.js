const {User} = require("../models");

module.exports = {

    getUser(req,res) {
        User.find()
        .then((userData) => res.json(userData))
        .catch((err) => res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
          .then((userData) => res.json(userData))
          .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
          });
      },



}