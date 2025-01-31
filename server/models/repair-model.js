const{Schema,model,default:mongoose} = require("mongoose");

const repairSchema = new Schema({
     machine_id :{
        type:String,
        required:true
     },
     
     machine_name:{
        type:String,
        required:true
     },

     issue_description:{
        type:String,
        required:true
     },

     receiver_name:{
        type:String,
        required:true
     },

     receiver_contact:{
        type:String,
        required:true        
     }
});

//Create model or collection
const Repair = new model('Repair',repairSchema);
module.exports = Repair;
