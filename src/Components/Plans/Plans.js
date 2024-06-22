import React from "react";
import './Plans.css'
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
const Plans = () => {
  const PlansCardInfo = [
    {
      cardTitle: "Personal Plans",
      cardFor: "For you",
      cardForWhom: "Individual",
      userProfile:<FaUser />,
      cardplans: "Starting at ₹850 per month",
      monthlyanual: "Billed monthly or annually. Cancel anytime.",
      plansbutton: "Start subscription",
      Benifit: [
        {
            benif1: "Access to 11,000+ top courses",
            benif2: "Certification prep",
            benif3: "Goal-focused recommendations",
            benif4: "AI-powered coding exercises",
            benif5:"Analytics and adoption reports",
            benif6:"Dedicated customer success team",
            benif7:"International course collection featuring 15 languages",
            benif8:"Customizable content",
            benif9:"Hands-on tech training with add-on",
            benif10:"Strategic implementation services with add-on",
          checkicon:<CiCircleCheck color="green" />,
        },
      ],
    },
    {
      cardTitle: "Personal Plans",
      cardFor: "For your team",
      cardForWhom: " 2 to 20 people",
      userProfile:<FaUsers />,
      cardplans: "₹1,167 a month per user",
      monthlyanual: "Billed monthly or annually. Cancel anytime.",
      plansbutton: "Start subscription",
      Benifit: [
        {
            benif1: "Access to 11,000+ top courses",
            benif2: "Certification prep",
            benif3: "Goal-focused recommendations",
            benif4: "AI-powered coding exercises",
            benif5:"Analytics and adoption reports",
            benif6:"Dedicated customer success team",
            benif7:"International course collection featuring 15 languages",
            benif8:"Customizable content",
            benif9:"Hands-on tech training with add-on",
            benif10:"Strategic implementation services with add-on",
          checkicon:<CiCircleCheck color="green" />,
        },
      ],
    },
    {
      cardTitle: "Personal Plans",
      cardFor: "For your whole organization",
      cardForWhom: "More than 20 people",
      userProfile:<FaUsers />,
      cardplans: "Contact sales for pricing",
      monthlyanual: "Billed monthly or annually. Cancel anytime.",
      plansbutton: "Start subscription",
      Benifit: [
        {
          benif1: "Access to 11,000+ top courses",
          benif2: "Certification prep",
          benif3: "Goal-focused recommendations",
          benif4: "AI-powered coding exercises",
          benif5:"Analytics and adoption reports",
          benif6:"Dedicated customer success team",
          benif7:"International course collection featuring 15 languages",
          benif8:"Customizable content",
          benif9:"Hands-on tech training with add-on",
          benif10:"Strategic implementation services with add-on",
          checkicon:<CiCircleCheck color="green"/>,
        },
      ],
    },
  ];
  return (
    <div className="plans">
      <div className="plans-container">
        <div className="plans-section">
          <div className="plan-heading">
            <p className="phead">Accelerate growth — for you or your organization</p>
            <p className="ppara">
              Reach goals faster with one of our plans or programs. Try one free
              today or contact sales to learn more.
            </p>
          </div>
          <div className="plans-cards">
            <div className="plans-card-container">
              <div
                className="plans-cards-sections"
              >
                {PlansCardInfo.map((items, index) => {
                  return (
                    <div key={index}>
                      <div className="cards-box" >
                        <div className="cards-headers">
                          <div className="cards-title" >
                            <h4>{items.cardTitle}</h4>
                            <p style={{color:"gray",fontSize:".6em"}}>{items.cardFor}</p>
                          </div>
                          <div className="cardwhom">
                            <p>{items.userProfile}</p>
                            <p style={{fontSize:".6em"}}>{items.cardForWhom}</p>
                          </div>
                          </div>
                          <div className="cards-content">
                            <div className="cards-content-container">
                            <h4>{items.cardplans}</h4>
                            <p style={{color:"gray",fontSize:".6em"}}>{items. monthlyanual}</p>
                            <button className="plans-btn">{items.plansbutton}</button>
                            <div className="benifit">
                                <div className="benifit-container">
                                
                                {
                                    items.Benifit.map((benifitdata,index)=>(
                                        <div key={index}>
                                            <ul className="" style={{listStyle:"none"}}>
                                                <div className="cards-benifit" >
                                                   <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif1}</p>
                                                   
                                                </div>
                                                <div className="cards-benifit">
                                               
                                                    <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif2}</p>
                                                   
                                                </div>
                                                <div className="cards-benifit">
                                                
                                                     <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif3}</p>
                                                  
                                                </div>
                                                <div className="cards-benifit">
                                             
                                                    <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif4}</p>
                                                </div>
                                                <div className="cards-benifit" >
                                              
                                                     <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif5}</p>
                                                   
                                                </div>
                                                <div className="cards-benifit" >
                                                 
                                                     <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif6}</p>
                                                   
                                                </div>
                                                <div className="cards-benifit" >
                                                    
                                                     <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif7}</p>
                                                   
                                                </div>
                                                <div className="cards-benifit" >
                                                 
                                                     <p>{benifitdata.checkicon}</p>
                                                    <p>{benifitdata.benif8}</p>
                                                   
                                                </div>
                                                <div className="cards-benifit" >
                                                 
                                                 <p>{benifitdata.checkicon}</p>
                                                <p>{benifitdata.benif9}</p>
                                               
                                            </div>
                                            <div className="cards-benifit" >
                                                 
                                                 <p>{benifitdata.checkicon}</p>
                                                <p>{benifitdata.benif10}</p>
                                               
                                            </div>

                                            
                                               
                                            </ul>
                                         
                                        </div>
                                        
                                    ))
                                    
                                }
                                </div>
                            </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Plans;
