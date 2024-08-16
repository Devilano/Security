
const router =require('express').Router();
const voteController = require("../controllers/voteController");
const { authGuard } = require('../middleware/authGaurd');

// create vote api 
 router.post('/create',authGuard, voteController.createVote)

 //get  vote api

 router.get('/get_vote',voteController.getVote)





 //exporting
 module.exports =router;