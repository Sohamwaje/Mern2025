const{Schema,model,default:mongoose} = require("mongoose");


const supportSchema = new Schema({

   Name :{
        type:String,
        required:true
     },
     
     Contact:{
        type:String,
        required:true
     },

     Issue:{
        type:String,
        required:true
     },

     Date:{
        type:Date,
        required:true
     },

     Time:{
        type:String,
        required:true
     },

     Status:{
        type:String,
        required:true        
     },

     Solution:{
        type:String,
        required:true        
     },

     
});



//Create model or collection
const Support = model('Support',supportSchema);
module.exports = Support;


