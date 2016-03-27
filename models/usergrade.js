var mongoose = require('mongoose');

var userGradeSchema = new mongoose.Schema({
    userGradeId:{type:String,index:true,unique:true},
    grade:Number,
    category:{type:String,ref:"Category"}
});
module.exports = mongoose.model('UserGrade', userGradeSchema);