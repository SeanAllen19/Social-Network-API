const { Schema, model } = require('mongoose');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true,
            ltrim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            match: {regex:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/}
        },
        // thoughts: {
            
        // },
        // friends: {

        // }
    }
)

const User = model('user', userSchema);

module.exports = User;