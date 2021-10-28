const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visitorSchema = new Schema ({
    uname : {
        type : String,
        required : true
    },

    password : {
        type : Number,
        required : true
    }
}, {timestamps: true})

const Airport = mongoose.model("Airport", visitorSchema);

module.exports = Airport;