const mongoose=require('mongoose')

const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("____________mongo db atlas connected");
}).catch((err)=>{
    console.log(`Mongo db atlas connection failed !! ${err}`);
})