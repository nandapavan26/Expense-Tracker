const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text:{
        type:String,
        trim:true,
        required:[true,'pls add some text']
    },
    amount:{
        type:Number,
        required:[true,'pls add a positive or negative number']
    },
    CreatedAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Transaction',TransactionSchema)