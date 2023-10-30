import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
        name:{
                type:String,
                required:true
        },
        subscribedTo:{
                type:String,
                required:true
        },
        subscribedDate:{
                type:Date,
                default:new Date(),
                required:true
        }
})

const subscriberModel = mongoose.model("Subscriber",subscriberSchema)
export default subscriberModel