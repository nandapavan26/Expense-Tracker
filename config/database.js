const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://nanda_26:nanda@expensetracker.4khhev9.mongodb.net/expensetracker?retryWrites=true&w=majority",{
            useNewUrlParser:true
        });
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }catch (err){
        console.log('error occured',err);
        process.exit(1);
    }
}

module.exports = connectDB;
