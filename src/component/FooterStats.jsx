import React from 'react';

const FooterStats = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#121f36 ',
    padding: '20px',
    color: 'white',
    margin:'5px'
  };

  const footerColumnStyle = {
    flex: '1',
    margin: '10px',
    padding: '10px',
    backgroundColor: '#121f36 ',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  const paragraphStyle = {
    fontSize: '16px',
    margin: '5px 0'
  };

  const highlightedTextStyle = {
    color: 'rgba(63,131,248,.5)'
  };

  const imageStyle = {
    border: 'none',
    borderRadius: '30px',
    backgroundColor: 'rgba(63,131,248,.5)',
    display: 'block',
    marginBottom: '10px',
    width: '10%',
    
  };

  return (
    <div style={containerStyle} mt-5>
      <div style={footerColumnStyle}>
        <p style={{ ...paragraphStyle, ...highlightedTextStyle }}><strong>Trusted by Over 20 Million Devotees in India and 100,000+ NRIs.</strong></p>
        <p style={paragraphStyle}>India's Most Loved Devotional App</p>
        <p style={paragraphStyle}>We are on a mission to assist a billion Indians in their spiritual and devotional journey and guide them on the path towards feeling happy, peaceful, and content.</p>
      </div>
      <div style={footerColumnStyle}>
        <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1721392347/Screenshot_2024-07-19_180051_ud8jf5.png" alt="srimandir stats" style={imageStyle} />
        <p style={paragraphStyle}><strong>2 Crore+ Devotees</strong></p>
        <p style={paragraphStyle}>have trusted us in their devotional journey</p>
        <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1721392333/Screenshot_2024-07-19_180045_ib3vak.png" alt="srimandir stats" style={imageStyle} />
        <p style={paragraphStyle}><strong>4.6 star rating</strong></p>
        <p style={paragraphStyle}>Over 1 Lakh devotees express their love for us on playstore</p>
      </div>
      <div style={footerColumnStyle}>
        <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1721392319/Screenshot_2024-07-19_180039_plgbvf.png" alt="srimandir stats" style={imageStyle} />
        <p style={paragraphStyle}><strong>5000+ Music Collection</strong></p>
        <p style={paragraphStyle}>Listen to your favourite Bhajans, Chalisa, Mantra and Aarti AD-Free</p>
        <img src="https://res.cloudinary.com/drdjty87p/image/upload/v1721392306/Screenshot_2024-07-19_180031_ditae4.png" alt="srimandir stats" style={imageStyle} />
        <p style={paragraphStyle}><strong>250K+ Successful Pooja Services</strong></p>
        <p style={paragraphStyle}>Millions of devotees have commenced Pooja at famous temples of India with us to seek God's grace.</p>
      </div>
    </div>
  );
}

export default FooterStats;
