import mongoose from "mongoose";

const URL = "mongodb+srv://21mh1a4906:zK9SuPMvtPuBfsag@nasacluster.a3zyqwr.mongodb.net/Nasa_Booking_Data";

mongoose.connect(URL)
    .then(()=>{
        console.log("Connected to The Database Server");
    })
    .catch((err)=>{
        console.log("Error Occured",err);
    })
