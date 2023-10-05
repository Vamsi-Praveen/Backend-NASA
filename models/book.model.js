import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenum:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    postalcode:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    experienced_before:{ 
        type:String,
        required:true
    },
    wheretogo:{ 
        type:String,
        required:true
    },
    travelling_date:{
        type:String,
        required:true
    },
    seatscount:{
        type:Number,
        required:true
    }
},{collection:"booking"},{versionKey:false})

const Book = mongoose.model('booking',bookingSchema)

export default Book;
