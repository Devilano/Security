const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Vote model
const voteSchema = new Schema({
    by: {
        type: Schema.Types.ObjectId, // User ID associated with the vote
        ref: 'users', // Reference to the User model
        required: true
    },
    to: {
        type: Schema.Types.ObjectId, // Party ID for which the vote is cast
        ref: 'Party', // Reference to the Party model
        required: true
    },
    // Collecting Voting date here 
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the Vote model using the schema
const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
