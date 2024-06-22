import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-header">
            <div className="footer-header-text">
              <p>
                Top companies choose <span>Udemy Business</span> to build
                in-demand career skills.
              </p>
            </div>
            <div className="foote-image">
              <img src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg" />
              <img src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg" />
              <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
              <img src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg" />
              <img src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
