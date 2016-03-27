var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    quesionId:{type:String,index:true,unique:true},
    category:{type:String,ref:"Category"},
    title:String,
    choose:String,
    answer:String
});
module.exports = mongoose.model('Question', questionSchema);