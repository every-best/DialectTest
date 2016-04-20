import mongoose from 'mongoose'
const {ObjectId} = mongoose.Schema.Types;

var questionSchema = new mongoose.Schema({
    category:{type:ObjectId,ref:"Category"},
    title:String,
    choose:[{type:String}],
    answer:String
});

export default mongoose.model('Question', questionSchema);

