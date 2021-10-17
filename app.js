const express =  require('express');
const mongoose = require('mongoose');

const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const port = process.env.PORT || 3100;

app.listen(port,()=>{
    console.log(`server on port ${port}`);
});


const uriBD = 'mongodb://localhost:27017/demo';

mongoose.connect(uriBD,{useNewUrlParser:true})
.then(console.log(`BD on ${uriBD}`))
.catch(e => console.error(e));


