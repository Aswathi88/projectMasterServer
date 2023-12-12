// load .env file
require('dotenv').config(

)


// import express
const express = require('express')


// import cors
const cors = require('cors')

//import routes
const routes=require('./Routes/routes')

require('./db/connection ')


//create sever using express
const projectServer = express()

//connect frontend with server
projectServer.use(cors())



//convert all incoming json data to js data
projectServer.use(express.json())


//use routes
projectServer.use(routes)

const PORT=4000 || process.env.PORT 

projectServer.listen(PORT,()=>{
    console.log(`-----------projectServer started at ${PORT}--------`);
})


//expport uploades folder to client(front end)
projectServer.use('/uploades',express.static('./uploades'))        //1:50:34

//resolve api request
projectServer.get('/',((req,res)=>{

    res.send(`<h1>server started at .....</h1>`)

}))










