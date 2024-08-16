import React, { useEffect, useState } from 'react';
import { getAllPartyApi, createVoteApi } from '../apis/Api';
import { toast } from 'react-toastify';
import '../style/partiespeople.css'; // Import custom CSS for additional styling
import UserRoute from '../protected/UserRoute';

const PartiesPeople = () => {
  const [party, setParty] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getAllPartyApi().then((res) => {
      setParty(res.data.party);
    });
  }, []);

  const handleVote = (partyId) => {
    createVoteApi({ PartyId: partyId })
      .then((res) => {
        if (res.data.success) {
          console.log('Vote successful:', res.data.message);
          toast.success(res.data.message);
        } else {
          console.error('Vote failed:', res.data.message);
          toast.error(res.data.message);
        }
      })
      .catch((error) => {
        console.error('Vote failed:', error);
      });
  };

  // Filter party array based on searchQuery
  const filteredParty = party.filter((item) =>
    item.personName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="political-members-container" style={{ marginTop: '200px' }}>
      <div className="header">
        <h1>Political Members</h1>
      </div>
      <div className="nepal-flag-background">
        {/* Add styles or use CSS to set the background image of the Nepal flag */}
      </div>
      {/* Search box */}
      <input
        style={{
          backgroundColor: "#264fb0",
          color: "white",
          width: "100%",
          padding: "15px",
          borderRadius: "8px",
          fontSize: "16px",
          border: "none",
          marginBottom: "20px",
        }}
        type="text"
        placeholder="Search by Person Name" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="card-container">
        {filteredParty.map((item, index) => (
          <div key={index} className="card" style={{backgroundColor:"#264fb0"}}>
            <img
              src={item.personImageUrl}
              alt="Card Image"
              className="card-img"
              style={{ width: '200px', height: '200px' }} // Adjust the width and height as needed
            />
            <div className="card-content">
              <h2 className="card-title">{item.personName}</h2>
              <p className="card-text">
                {item.personParty}
                {item.personPosition}
                {item.personRanking}
                <div className="btn-group" role="group">
                  <button onClick={() => handleVote(item._id, index)} className="btn rounded btn-primary">
                    Vote
                  </button>
                  <span className="voting-count ml-2">{item.votingCount}</span>
                </div>
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Pop-up box */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Voted Successfully!</h3>
            <span className="animation-text">Thanks For Voting</span>
            <button onClick={() => setShowPopup(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartiesPeople; // Export default for PartiesPeople component
export { UserRoute }; // Export UserRoute component
