const router =require('express').Router();
const partyController = require('../controllers/partyController');
const { authGuardAdmin, authGuard } = require('../middleware/authGaurd');


//Create Party API
router.post('/create_party',partyController.createParty)

// Get all party API
router.get('/get_party',partyController.getAllParty)

//Get Single party api

router.get("/get_party/:id", partyController.getSingleParty)

//update party API

router.put("/update_party/:id",authGuardAdmin,partyController.updateParty)

// delete party API
router.delete("/delete_party/:id",authGuardAdmin, partyController.deleteParty)

//exporting 
module.exports = router;










module.exports=router;