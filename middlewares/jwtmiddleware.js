const jwt=require('jsonwebtoken')

exports.jwtMiddleware=(req,res,next)=>{
    console.log("inside middleware");

    // console.log(req.headers['access_token']);
    //token acces
     const token=req.headers['access_token'].split(" ")[1]

    //verify

    try{
        const JWTresponse=jwt.verify(token,'supersecretkey123')
        console.log(JWTresponse);
        req.payload=JWTresponse._id 
        next()

    }
    catch{
        res.status(401).json("authorization failed please login!!")
        
    }
}