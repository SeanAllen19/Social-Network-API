const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deletethought,


} = require('../../controller/thoughtController')


router.route('/').get(getThoughts).post(createThought)



module.exports = router;
