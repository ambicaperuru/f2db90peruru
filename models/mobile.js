const mongoose = require("mongoose") 
const mobileSchema = mongoose.Schema({ 
    mobile_type: {type: String,required: [true, 'Mobile type cannot be empty']},
    size: {type: String,required: [true, 'Mobile size cannot be empty']},
    cost: {type: Number,required: [true, 'Mobile cost cannot be empty']},
}) 

module.exports = mongoose.model("mobiles", mobileSchema) 
