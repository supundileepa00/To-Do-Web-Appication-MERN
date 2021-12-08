const mongoose = require('mongoose');


const CrudSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Provide a Name'],
        trim: true,
        maxlength: [50, 'name must be less than 50 characters']
    },

    comment: String,

    completed: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})



module.exports = mongoose.model('Crud', CrudSchema)