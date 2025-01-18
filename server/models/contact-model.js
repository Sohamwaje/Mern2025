const{Schema, model,default:mongoose} = require("mongoose");
//const { required } = require("../validator/auth-validator");

const contactSchema = new Schema({
    username: {type:String, required:true},
    email: {type:String, required:true},
    message: {type:String, required:true},
});
//create model or collection
const Contact = new model('Contact',contactSchema);
module.exports = Contact;


