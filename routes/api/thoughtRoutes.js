const router = require('express').Router();

const {
    getThoughts,
    getOneThought,
    createThought,
    updateThought,
    deletethought,
    addReaction,
    deleteReaction


} = require('../../controller/thoughtController')

//GET all thoughts
router.route('/').get(getThoughts).post(createThought)
//GET one thought, with ID
router.route('/:thoughtId').get(getOneThought)
//PUT/UPDATE one thought with ID
router.route('/:thoughtId').get(getOneThought).put(updateThought)
//Delete a thought
router.route('/:thoughtId').get(getOneThought).delete(deletethought)


router.route('/:thoughtId/reactions').post(addReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction)
module.exports = router;
