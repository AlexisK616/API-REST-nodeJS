const express =  require('express');
const {connection} = require('./config/dbConnect');


const app =  express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/',require('./routes/index'));


const port = process.env.PORT || 3100;


connection();
app.listen(port,()=>{
    console.log(`server on port ${port}`);
});





