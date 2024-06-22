import React, { useState } from 'react';
import './Learning.css';

const Learning = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [clicked,setClicked] = useState(false);

  const learningData = [
    {
      imgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png',
      hoverImgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png',
      title: 'Hands-on training',
      paragraph: 'Upskill effectively with AI-powered coding exercises, practice tests, skills assessments, labs, and workspaces.',
    },
    {
      imgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/2Xh9YHJustDwCEjn5IlO25/93e9b15c6e74876db0dec63466fcc5a0/certificate.png',
      hoverImgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/GUVYFTj0uwEQuJha5j7TZ/133c991fb3b3f1f93a3e842f4baa7f44/desktop-certification-prep-2x.png',
      title: 'Certification prep',
      paragraph: 'Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.',
    },
    {
      imgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/6w8plrr7vY9rIY46UuX0q5/2f0a3f0c22e99bd2d430b998c81321f2/empty-state-1.png',
      hoverImgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/6q4N9BvIQusFoheoALJhGj/678c1a0bb6c2a22d95461d409492231e/desktop-insights-and-analytics-2x.png',
      title: 'Insights and analytics',
      paragraph: 'Fast-track goals with advanced insights plus a dedicated customer success team to help drive effective learning.',
    },
    {
      imgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/2tKGBrb1N60wox2Lh8j3tz/7f1528c9f88ea47bd6ebb46f345902c3/organizations-2.png',
      hoverImgUrl: 'https://cms-images.udemycdn.com/96883mtakkm8/385IhnON960Wvz50ooWIN3/d4e6738c97769258d387b3d609edaad4/desktop-customizable-2x.png',
      title: 'Customizable content',
      paragraph: 'Create tailored learning paths for team and organization goals and even host your own content and resources.',
    },
  ];

  const handleMouseEnter = (hoverImgUrl) => {
    setHoveredImage(hoverImgUrl);
    setClicked(!clicked);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div className="learning">
      <div className="learning-container">
        <div className="learning-section">
          <h3>Learning focused on your goal</h3>
        </div>
        <div className="learning-cards">
          <div className="learning-cards-container" style={{display:"flex",flexDirection:"column"}}>
            {learningData.map((learn, index) => (
              <div
                className={`card-info ${clicked}?'clicked':''`}
                key={index}
                onClick={() => handleMouseEnter(learn.hoverImgUrl)}
               
              >
                <div className='learn-cards' style={{display:"flex",width:"400px",fontSize:".8em",alignItems:"center"}}>
                <div className="card-img" style={{fontSize:".8em",width:"10vw"}}>
                  <img style={{width:"100%"}} src={learn.imgUrl} alt={learn.title} />
                </div>
                <div className="card-description">
                  <h4>{learn.title}</h4>
                  <p>{learn.paragraph}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {hoveredImage && (
        <div className="hovered-image">
          <img src={hoveredImage} alt="Hovered" />
        </div>
      )}
    </div>
  );
};

export default Learning;
