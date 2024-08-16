const router =require('express').Router();
const progressController = require('../controllers/progressController');
const { authGuardAdmin, } = require('../middleware/authGaurd');


//Create Progress API
router.post('/create_progress',progressController.createProgress)

// Get all progress API
router.get('/get_progress',progressController.getAllProgress)

//Get Single progress api

router.get("/get_progress/:id", progressController.getSingleProgress)



// delete progress API
router.delete("/delete_progress/:id",authGuardAdmin, progressController.deleteProgress)

//exporting 
module.exports = router;










module.exports=router;