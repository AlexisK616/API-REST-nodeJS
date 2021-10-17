const mongoose = require('mongoose');


const connection = () =>{
const uriBD = 'mongodb://localhost:27017/demo';
mongoose.connect(uriBD,{useNewUrlParser:true})
.then(console.log(`BD on ${uriBD}`))
.catch(e => console.error(e)); }


module.exports = {connection}