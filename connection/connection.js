const mongoose = require('mongoose')
async function connection(url){
   return await mongoose.connect(url)//then catch lagana he
}
module.exports= connection;