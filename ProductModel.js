import mongoose from "mongoose";
const component_schema=mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    message:String
})
export default mongoose.model('ProductModel',component_schema)