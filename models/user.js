var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId:{type:String,index:true,unique:true},
    name:String,
    note:String,
    gender:String,
    grades:[{type:String,ref:"UserGrade"}]
});
module.exports = mongoose.model('User', userSchema);