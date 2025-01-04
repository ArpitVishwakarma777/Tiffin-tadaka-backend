const mongoose = require('mongoose')
const tiffinCatSchema = new mongoose.Schema({
    id:{
type:String,
required:true
    }
    ,src:{
        type:String,
required:true
    }
    ,title:{
        type:String,
        required:true 
    
    },
    text:{
        type:Array,    
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const TiffinOneDay = mongoose.model('oneDayMenu', tiffinCatSchema);
const TiffinWeekly = mongoose.model('weeklyMenu',tiffinCatSchema)
const TiffinMonthly = mongoose.model('monthlyMenu',tiffinCatSchema)
module.exports={
    TiffinOneDay,
    TiffinWeekly,
    TiffinMonthly
}