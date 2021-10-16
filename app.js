const express =  require('express');
const mongoose =  require('mongoose');

const app =  express();

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server on port ${port}`);
});


const uriBD = 'localhost:27017/demo';

mongoose.connect(uriBD)
.then(console.log(`BD on ${uriBD}`))
.catch(e => console.error(e));