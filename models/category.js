import mongoose from 'mongoose'
//var autoIncrement = require('mongoose-auto-increment');
//autoIncrement.initialize(mongoose.connection);

var categorySchema = new mongoose.Schema({
    //categoryId:{type:String,require: true, unique: true},
    name:String,
    desc:String,
    gradeText:[{type:String}]
});
//categorySchema.plugin(autoIncrement.plugin, {
//    model:'Category',
//    fieldId:'categoryId',
//    startAt:1000,
//    incrementBy:1
//});
export default mongoose.model('Category', categorySchema);