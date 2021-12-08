const mongoose = require('mongoose');


const connectDB = (url) => {
    return mongoose.connect(url, {
        //useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useFindAndModify: false
    })
}

module.exports = connectDB;