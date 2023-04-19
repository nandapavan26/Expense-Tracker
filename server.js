const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/database');

connectDB();

dotenv.config({path: './config/config.env'});

const transactions = require('./routes/transaction');

const app = express();

app.use(express.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions',transactions);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client' ,'build','index.html'))
    })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT,(req,res)=>{
    console.log(`server running on port ${process.env.PORT}`);
})