const mongoose = require("mongoose") 
const mobileSchema = mongoose.Schema({ 
 mobile_type: String, 
 size: String, 
 cost: Number 
}) 

module.exports = mongoose.model("mobiles", mobileSchema) 
