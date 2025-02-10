const{Schema,model,default:mongoose} = require("mongoose");

const outSchema = new Schema({
    DeviceSN:{
        type:String,
        required:true
    },
    DeviceName: {
        type:String,
        required:true
    },
    SiteName: {
        type:String,
        required:true
    },
    broughtBy: {
        type:String,
        required:true
    },
    receiverContact:{
        type:String,
        required:true
    },
    inwardDate:{
        type:Date
    }
});

//Create model or collection
const Outward = model('Outward',outSchema);
module.exports = Outward;


