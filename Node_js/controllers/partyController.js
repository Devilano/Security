const Party = require('../models/partyModel');
const cloudinary = require('cloudinary');

const createParty = async(req,res) =>{
    //step 1 : Check incoming data
    console.log(req.body);
    console.log(req.files);

    // stgep 2 destructuring
const {
    personName,personParty,personPosition,personRanking,homeTown,lastelectedFrom
} =req.body;
const{personImage} = req.files;
// const{partyImage}=req.files;

// step : 3 valadation

if(!personName || !personParty || !personPosition ||!personRanking || !personImage ||!homeTown ||!lastelectedFrom){
    return res.json({
        success: false,
        message: "Fill in all the details."
    })

}
// step 4 try catch block
try{
    //step 5 : upload image to cloudinary
    const uploadImage = await cloudinary.v2.uploader.upload(
        personImage.path,
        {
            folder : "party",
            crop : "scale"
        }
    )
    // save the products 
    const newParty = new Party({
        personName : personName,
        personParty : personParty,
        personPosition: personPosition,
        personRanking : personRanking,
        homeTown: homeTown,
        lastelectedFrom :lastelectedFrom,
        personImageUrl : uploadImage.secure_url,
        // partyImageUrl : uploadImage.secure_url
    })

    await newParty.save();
    res.status(200).json({
        success :true,
        message :" Party created sucessefully",
        data : newParty
    })

} catch (error){
    console.log(error);
    res.status(500).json("Server Eror");
}
}

// function off getting all Party
const getAllParty =async(req,res)=>{
    try{
        const listofParty =await Party.find();
        res.json({
            success :true,
            message : "Fetched",
            party : listofParty
        })

    } catch (error){
        console.log(error);
        res.status(500).json("Server Error")
    }
}


// get party by id
const getSingleParty = async (req, res) => {
    const id = req.params.id;
    if(!id) {
      return res.json ({
        success: false,
        message: "Party Id is required"
      })
    }
    try {
      const singleParty = await Party.findById(id);
      res.json({
        success: true,
        message: "Party Created Successfully",
        
      })
    } catch (error) {
      console.log(error);
      res.status(500).json("Server Error")
    }
  }

  //update Party
  const updateParty = async (req, res) => {
    console.log(req.body);
    console.log(req.files);

    // destructuring
    const {
        personName,
        personParty,
        personPosition,
        personRanking,
        homeTown,
        lastelectedFrom,
    } = req.body;
    const { personImage } = req.files;
    const id = req.params.id;

    // validation
    if (!personName || !personParty || !personPosition || !personRanking || !personImage || !homeTown || !lastelectedFrom) {
        return res.json({
            success: false,
            message: "Fill in all the details."
        });
    }

    try {
        if (personName) {
            const uploadedImage = await cloudinary.v2.uploader.upload(
                personImage.path,
                {
                    folder: "party",
                    crop: 'scale' // corrected to 'scale'
                }
            );

            // update the Party
            const updatedParty = {
                personName: personName,
                personParty: personParty,
                personPosition: personPosition,
                personRanking: personRanking,
                homeTown: homeTown,
                lastelectedFrom: lastelectedFrom,
                personImageUrl: uploadedImage.secure_url, // corrected variable name
            };

            await Party.findByIdAndUpdate(id, updatedParty, { new: true }); // added { new: true }
            res.json({
                success: true,
                message: "Party updated successfully",
                party: updatedParty
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};

    
// delete Party
const deleteParty = async(req,res)=> {
    try{
        const deleteParty = await Party.findOneAndDelete(req.params.id);
        if(!deleteParty){
            res.json({
                success:false,
                message: "party not found !"
            })
        }
        
        res.json({
            success: true,
            message: "party deleted Sucessfully"
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

    createParty,getAllParty,getSingleParty,updateParty,deleteParty
}