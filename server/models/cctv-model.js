const{Schema,model,default:mongoose} = require("mongoose");

const cctvSchema = new Schema({
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

//Create model or collection
const Cctv = model('Cctv',cctvSchema);
module.exports = Cctv;


