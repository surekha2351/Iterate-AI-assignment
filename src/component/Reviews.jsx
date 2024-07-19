import React from 'react';

const Reviews = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: '20px',
    color: 'black'
  };

  const reviewCardStyle = {
    flex: '1',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#E6E6FA',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    text:"left"
  };

  const ratingStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const reviewTextStyle = {
    fontSize: '16px',
    margin: '10px 0'
  };

  const reviewerNameStyle = {
    fontSize: '14px',
    fontStyle: 'italic'
  };

  return (
    <div style={containerStyle}>
      <div style={reviewCardStyle}>
        <div style={ratingStyle}>★★★★☆</div>
        <div style={reviewTextStyle}>This app has greatly enhanced my spiritual journey. The bhajans and mantras are soothing and bring peace to my mind.</div>
        <div style={reviewerNameStyle}>- A devotee</div>
      </div>
      <div style={reviewCardStyle}>
        <div style={ratingStyle}>★★★★★</div>
        <div style={reviewTextStyle}>The best devotional app I've ever used. The collection of bhajans and mantras is vast and the interface is user-friendly.</div>
        <div style={reviewerNameStyle}>- Rajesh Kumar</div>
      </div>
      <div style={reviewCardStyle}>
        <div style={ratingStyle}>★★★★☆</div>
        <div style={reviewTextStyle}>I love how this app brings the temple experience to my home. The live pooja services are incredible.</div>
        <div style={reviewerNameStyle}>- Meena Sharma</div>
      </div>
      <div style={reviewCardStyle}>
        <div style={ratingStyle}>★★★★★</div>
        <div style={reviewTextStyle}>Excellent app! It has everything I need for my daily devotional practices. Highly recommend it!</div>
        <div style={reviewerNameStyle}>- Anil Patel</div>
      </div>
    </div>
  );
};

export default Reviews;
