
const jwt = require ('jsonwebtoken');

const authGuard = (req,res,next)=> {
    // get header  authorization

    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.json({
            sucess:false,
            message :"Authorization header not found !"
        })
    }

    // get token by spliting the header
    // Format = "Bearer tokenxyfghjhgfdfghg"
    const token = authHeader.split (' ')[1];
    if(!token){
        return res.json({
            sucess:false,
            message:"Token not found!"
        })
    }
    try{
        //verify token 
        const decodeUser = jwt.verify(token,"HFBDFVRGSGVF");
        req.user = decodeUser;
        next();

    }catch (error){
        res.json({
            sucess:false,
            message:"Invalid Token"
        })
    }

}


const authGuardAdmin = (req,res,next)=> {
    // get header  authorization

    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.json({
            sucess:false,
            message :"Authorization header not found !"
        })
    }

    // get token by spliting the header
    // Format = "Bearer tokenxyfghjhgfdfghg"
    const token = authHeader.split (' ')[1];
    if(!token){
        return res.json({
            sucess:false,
            message:"Token not found!"
        })
    }
    try{
        //verify token 
        const decodeUser = jwt.verify(token,"HFBDFVRGSGVF");
        req.user = decodeUser;
        if(!req.user.isAdmin){
            return res.json({
                sucess: false,
                message: "Permission denied"
            })
        }
        // check if user is admin or not
        next();

    }catch (error){
        res.json({
            sucess:false,
            message:"Invalid Token"
        })
    }

}

module.exports ={authGuard,authGuardAdmin};
