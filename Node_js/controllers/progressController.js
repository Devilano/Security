 const cloudinary = require('cloudinary');
const Progress = require('../models/progressModel');

const createProgress = async(req,res) =>{
    //step 1 : Check incoming data
    console.log(req.body);
    console.log(req.files);

    // stgep 2 destructuring
const {
    newsTitle,sourceFrom,publisher,date
} =req.body;
const{newsImage} = req.files;

// step : 3 valadation

if(!newsTitle || !sourceFrom || !publisher ||!date){
    return res.json({
        success: false,
        message: "Fill in all the details."
    })

}
// step 4 try catch block
try{
    //step 5 : upload image to cloudinary
    const uploadImage = await cloudinary.v2.uploader.upload(
        newsImage.path,
        {
            folder : "news",
            crop : "scale"
        }
    )
    // save the Progress 
    const newProgress = new Progress({
        newsTitle : newsTitle,
        sourceFrom : sourceFrom,
        publisher:publisher,
        date: date,
        newsImageUrl : uploadImage.secure_url,
    })

    await newProgress.save();
    res.status(200).json({
        success :true,
        message :" News created sucessefully",
        data : newProgress
    })

} catch (error){
    console.log(error);
    res.status(500).json("Server Eror");
}
}

// function off getting all Progress
const getAllProgress =async(req,res)=>{
    try{
        const listofProgress =await Progress.find();
        res.json({
            success :true,
            message : "Fetched",
            progress : listofProgress
        })

    } catch (error){
        console.log(error);
        res.status(500).json("Server Error")
    }
}


// get party by id
const getSingleProgress = async (req, res) => {
    const id = req.params.id;
    if(!id) {
      return res.json ({
        success: false,
        message: "Progress Id is required"
      })
    }
    try {
      const singleProgress = await Progress.findById(id);
      res.json({
        success: true,
        message: "Progress Created Successfully",
        
      })
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error")
    }
  }

  
// delete Progress
const deleteProgress = async(req,res)=> {
    try{
        const deleteProgress = await Party.findOneAndDelete(req.params.id);
        if(!deleteProgress){
            res.json({
                success:false,
                message: "progress not found !"
            })
        }
        
        res.json({
            success: true,
            message: "News deleted Sucessfully"
        })

    }catch (error){
        console.log(error);
        res.statu(500).json({
            success:false,
            message :"Server Error"

        })
    }

}




module.exports={

    createProgress,getAllProgress,getSingleProgress,deleteProgress,
}