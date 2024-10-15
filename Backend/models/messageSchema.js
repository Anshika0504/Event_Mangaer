import mongoose from "mongoose";
import validator from "validator";
const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required"],
        minLength:[3,"Name must contain atleast 3 characters"]
    },
    email:{
        type:String,
        required:[true,"Email required"],
        validate:[validator.isEmail,"Please provide the valid email"]
    },
    subject:{
        type:String,
        required:[true,"Subject Requierd"],
        minLength:[5,"Subject must conatain 5 characters"]
    },
    message:{
       type:String,
       required:[true,"Message Required"],
       minLength:[10,"Message must contain atleast 10 characters"] 
    }

})
export const Message=mongoose.model("Message",messageSchema);
