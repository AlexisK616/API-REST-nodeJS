const mongoose =  require('mongoose');

const uri = 'localhost:27017/demo';

mongoose.connect(`mongodb://${uri}`)
.then(()=> console.log("connection to mongodb ok"),{useNewUrlParser:true})
.catch(err => console.log(err))


const userSchema =  new mongoose.Schema({
    name : String,
    roles : [String],
    createAt : {type:Date, default:Date.now}
});


const User = new mongoose.model('user', userSchema);


const createUser = async ()=>{
    const user =  new User({name:"rodo",roles:["User"]});
    const res = await user.save();
};


const page = 2;
const size = 10;

const listar =  async () =>{
    const res = await User.find()
    .skip((page-1)*size)
    .limit(size)
    .sort({name:-1});
    console.log(res);
}


const actualizar = async (id) => {
//const user = await User.findById(id);
//if(!user) console.error("error to find!");
//user.set({
//    name: "editado"
//})
//const res = await user.save();
//console.log(res);
//con querys de mongodb
const res = await User.findByIdAndUpdate(id,{$set:{name:"editado5"}});
console.log(res)
}


actualizar('616b3b7ec5e800134c8ad031').catch(e => console.log(e));