const{Schema,model,default:mongoose} = require("mongoose");

const repairSchema = new Schema({
   machineId :{
        type:String,
        required:true
     },
     
     machineName:{
        type:String,
        required:true
     },

     issueDescription:{
        type:String,
        required:true
     },

     receiverName:{
        type:String,
        required:true
     },

     receiverContact:{
        type:String,
        required:true        
     },

     repairDate:{
      type:Date
     }
});



//Create model or collection
const Repair = model('Repair',repairSchema);
module.exports = Repair;


