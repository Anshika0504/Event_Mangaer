import mongoose from "mongoose";
export const dbConnection=()=>{
 mongoose.connect("mongodb://localhost:27017/event_manager").then(()=>{
    console.log("connected to the database");
 }).catch(err=>{
    console.log("some error has occured while connecting to the database");
 })
}