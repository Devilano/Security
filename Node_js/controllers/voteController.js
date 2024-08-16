const Voting = require('../models/voteModel');
const Party = require('../models/partyModel');
const Vote = require('../models/voteModel');

const createVote = async (req, res) => {
    console.log(req.body);
    const userId = req.user.id
    const { PartyId } = req.body;
    console.log("partyId:::", PartyId)
    console.log(userId)

    try {
        // // Check if the user has already voted for this party
        const existingVote = await Voting.findOne({ by: userId, to: PartyId });
        if (existingVote) {
            console.log("voting exist")
            return res.json({ success: false, message: 'You have already voted  this Person' });
        }
        // Check if the user has already voted for any party
        const userVotes = await Voting.find({ by: userId });
        if (userVotes.length > 0) {
            console.log("You alread voted")

            return res.json({ success: false, message: 'You have already voted ' });
        }
    


        // Create a new vote
        const newVote = new Voting({
            by: userId, // User ID associated with the vote
            to: PartyId,
        });
        await newVote.save();

        // Update voting count for the party
        await Party.findByIdAndUpdate(PartyId, { $inc: { votingCount: 1 } });


        res.status(200).json({ success: true, message: 'Vote recorded successfully' });
    } catch (error) {
        console.error('Error creating vote:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

// Route to fetch vote data
const getVote = async (req, res, next) => {
    try {
        const votes = await Vote.find().populate('by').populate('to');
        console.log(votes)
        res.status(200).json({
            
            success: true,
            message:"Vote fetch sucessfully",
            votes: votes
        }

        );
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = { createVote, getVote };
