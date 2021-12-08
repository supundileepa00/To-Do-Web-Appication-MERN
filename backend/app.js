const express = require('express');
const app = express();
const port = 5000;
const connectDB = require('./db/connect');
require('dotenv').config();
//require router
const router = require('./routes/crud')
const cors = require('cors');

//Middleware

/*
app.use((req, res, next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control=Allow-Origin','*')

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({})
    }


    next();
});
*/
app.use(express.json());
app.use(cors({
    origin:'http://localhost:3000'
}))

//route
app.use('/api/v1/crud',router)

//connection
const start = async () => {
    try {
        await connectDB(process.env.MONGO_CONNECT);
        app.listen(port, (req, res) => {
            console.log('You are listening to port: ', port);
        })
    } catch (error) {
        console.log(error);
    }
}


start();