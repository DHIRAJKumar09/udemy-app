import React from "react";
import "./reviews.css";
import { RiDoubleQuotesL } from "react-icons/ri";
const Reviews = () => {
  const reviewData = [
    {
      qutoesIcon: <RiDoubleQuotesL />,
      quotesDescription:
        "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      reviewImg:
        "https://cms-images.udemycdn.com/96883mtakkm8/6dT7xusLHYoOUizXeVqgUk/4317f63fe25b2e07ad8c70cda641014b/William_A_Wachlin.jpeg",
      reviewname: "William A. Wachilin",
      reviewWork: "Partner Account Manager at Amazon Web Services",
      extraInfo: "View this AWS courses >",
    },
    {
      qutoesIcon: <RiDoubleQuotesL />,
      quotesDescription:
        "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      reviewImg:
        "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
      reviewname: "William A. Wachilin",
      reviewWork: "Partner Account Manager at Amazon Web Services",
      extraInfo: "View this AWS courses >",
    },
    {
      qutoesIcon: <RiDoubleQuotesL />,
      quotesDescription:
        "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      reviewImg:
        "https://cms-images.udemycdn.com/96883mtakkm8/4w9dYD4F64ibQwsaAB01Z4/c4610e9b1ac65589d8b1374ad10714e2/Ian_Stevens.png",
      reviewname: "William A. Wachilin",
      reviewWork: "Partner Account Manager at Amazon Web Services",
      extraInfo: "View this AWS courses >",
    },
    {
      qutoesIcon: <RiDoubleQuotesL />,
      quotesDescription:
        "Udemy was rated the most popular online course or certification program for learning how to code according to StackOverflow’s 2023 Developer survey.",
      reviewImg:
        "https://cms-images.udemycdn.com/96883mtakkm8/1Djz6c0gZLaCG5SQS3PgUY/54b6fb8c85d8da01da95cbb94fa6335f/Alvin_Lim.jpeg",
      reviewname: "William A. Wachilin",
      reviewWork: "Partner Account Manager at Amazon Web Services",
      extraInfo: "View this AWS courses >",
    },
  ];
  return (
    <div className="reviews">
      <div className="review-container">
        <div className="review-section">
          <div className="review-header">
            <h3>See what others are achieving through learning</h3>
          </div>
          <div className="review-container">
            {reviewData.map((item, index) => {
              return (
                <div className="quotes" key={index}>
                  <div className="quotes-description">
                    <div className="quotesIcons">{item.qutoesIcon}</div>
                    <div className="quotes-container">
                      <p style={{ fontSize: ".6em" }}>
                        {item.quotesDescription}
                      </p>
                    </div>
                  </div>
                  <div className="reviewers-info">
                    <div className="reviewer-img">
                      <img src={item.reviewImg} />
                    </div>
                    <div className="reviewer-description">
                      <p style={{ fontSize: ".6em" }}>{item.reviewWork}</p>
                    </div>
                    
                  </div>
                  <div className="extroInfo">
                        <p style={{fontSize:".6em",color:"purple",cursor:"pointer"}}>{item.extraInfo}</p>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
