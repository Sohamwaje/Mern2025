const{Schema,model,default:mongoose} = require("mongoose");

const inSchema = new Schema({
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

const Inward = model('Inward',inSchema);
module.exports = Inward;