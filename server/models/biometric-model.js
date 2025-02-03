const{Schema,model,default:mongoose} = require("mongoose");

const bioSchema = new Schema({
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
    receiverName: {
        type:String,
        required:true
    },
    receiverContact:{
        type:String,
        required:true
    },
    dispatchDate:{
        type:Date
    }
});

const Biometric = model('Biometric',bioSchema);
module.exports = Biometric;