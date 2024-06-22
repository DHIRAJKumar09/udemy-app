import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { MdLanguage } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import { FaAngleRight } from "react-icons/fa";

import Cards from "../Cards/Cards";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="Header">
      <div className="header-section">
        <div className="Nabvar">
          <div className="nav">
            <ul className="nav-ul">
              <img
                className="img-logo"
                style={{ width: "6em", loading: "lazy", marginTop: ".6em" }}
                src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
              />
              <div className="nav-category">
                <p className="nav-li">Category</p>
                 <div className="category-items" >
                    <div className="cate-item">
                        <p>Developement</p>
                        <FaAngleRight />

                    </div>
                    <div className="cate-item">
                        <p>IT & Software</p>
                        <FaAngleRight />

                    </div>
                    <div className="cate-item">
                        <p>Business Developement</p>
                        <FaAngleRight />
                    </div>

                    <div className="cate-item">
                        <p> Design</p>
                        <FaAngleRight />
                    </div>
                    <div className="cate-item">
                        <p>Marketing</p>
                        <FaAngleRight />
                    </div>
                    <div className="cate-item">
                        <p>Lifestyle</p>
                        <FaAngleRight />
                    </div>
                    <div className="cate-item">
                        <p>Photography & Video</p>
                        <FaAngleRight />
                    </div>
                    <div className="cate-item">
                        <p>Health & Fitness</p>
                        <FaAngleRight />
                    </div>
                    <div className="cate-item">
                        <p>Music</p>
                        <FaAngleRight />
                    </div>
                 </div>
              </div>
              <div className="nav-search">
                <BiSearchAlt />
                <input
                  className="search-btn"
                  type="text"
                  placeholder="search"
                />
              </div>
              <li className="nav-li" style={{fontSize:".8em"}}>plan & price</li>
              
              <div className="udemybusiness">
                <p style={{fontSize:".8em"}}>Udemy Business</p>
                <div className="business-block">
                    <div className="business-text">
                        <p>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</p>
                        <button className="business-btn">Try Udemy Business</button>
                    </div>
                </div>
              </div>

              <div className="udemybusiness">
                <p style={{fontSize:".8em"}}>Tech Udemy</p>
                <div className="business-block">
                    <div className="business-text">
                        <p>Turn what you know into an opportunity and reach millions around the world.</p>
                        <button className="business-btn">Learn More</button>
                    </div>
                </div>
              </div>
              <div className="udemybusiness">
              <IoCartOutline style={{fontSize:"1.5em"}} />
                <div className="business-block">
                    <div className="business-text">
                        <p style={{fontSize:"1.4em"}}>Your cart is empty.</p>
                        <button className="business-btn" style={{background:"white",color:"purple"}}>Keep shopping</button>
                    </div>
                </div>
              </div>
              <div className="nav-login-contianer">
                <button className="login btn">Login</button>
                <button className="signup btn">Signup</button>
                <button className=" language btn">
                  <MdLanguage />
                </button>

              </div>
            </ul>

            <div className="menu-icon" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
              <img
                className="img-logo"
                style={{ width: "4em", loading: "lazy" }}
                src="https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg"
              />
              <div
                className="end-icon"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <IoCartOutline />
                <BiSearchAlt />
              </div>
            </div>
            {
                sidebarOpen ? (
                    <div className="sidebar-container">
                <div className="sidebar-section">
                  <ul className="sidebar-ul">
                     <li style={{color:"purple"}}>Login</li>
                     <li style={{color:"purple"}}>Signup</li>
                     <li style={{color:"purple"}}>Plans & Pricing</li>
                     <hr></hr>
                     <p>Most Popular</p>
                     <li>Web Development</li>
                     <li>Mobile Development</li>
                     <li>Game Developement</li>
                     <li>Eneterpreneurship</li>
                     <li>Business Analytics & Intelligence</li>
                     <li>Finance</li>
                     <li>IT Certificate</li>
                     <li>Personal Transformation</li>
                     <li>Graphics Design</li>
                     <hr></hr>
                     <p>More From Udemy</p>
                     <li>Udemy Business</li>
                     <li>Get The App</li>
                     <li>Invite friend</li>
                     <li>Help</li>

                    
                  </ul>
                </div>
              </div>
                ):""
            }
          </div>
          <div className="main-conainter">
            <div className="main-section">
              <div className="main">
                <img
                  style={{ width: "100%" }}
                  src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/139c6d08-df69-4a14-8e15-4d6085c62b03.jpg"
                />
                <div className="text-container">
                  <div className="text-description">
                    <h2>Last day to see where the deals lead</h2>
                    <p style={{ fontSize: ".8em" }}>
                      Save on courses from just ₹399 today. Discover new
                      possibilities tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cards" style={{ overflowX: "hidden" }}>
            <div className="cards-section">
              <div
                className="headers"
                style={{ textAlign: "left", padding: ".4em" }}
              >
                <h1>All the skills you need in one place</h1>
                <p>
                  From critical skills to technical topics, Udemy supports your
                  professional development.
                </p>
              </div>
              <div className="cards-container">
                <Cards />
              </div>
              <div className="show-courses">
                <h3>Show all Web Development courses</h3>
              </div>
              <div className="company-name">

                <div className="company-text">
                    <h4>Trusted by over 15,000 companies and millions of learners around the world</h4>
                </div>
                <div className="company-container">
                    <img src="https://cms-images.udemycdn.com/content/ocud9ia7cf/svg/vimeo_logo.svg?position=c&quality=80&x.app=portals"/>
                    <img src="https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals"/>
                    <img src="https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals"/>
                    <img src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals"/>
                    <img src="https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals"/>
                    <img src="https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
