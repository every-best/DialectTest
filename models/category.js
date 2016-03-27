var mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    categoryId:{type:String,unique:true,index:true},
    name:String,
    gradeText:[{type:String}]
});
module.exports = mongoose.model('Category', categorySchema);