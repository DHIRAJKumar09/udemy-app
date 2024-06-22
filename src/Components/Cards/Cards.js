import React from 'react'

import './card.css'
import { AiFillStar } from 'react-icons/ai';
const Cards = () => {
   

    const cardData = [
        {
            imgUrl:
                'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tDvPpTA8Jw5P_B5xV8gsjw.jpeg',
           
            tutor:"Dr. Ayngu Yu",
            title: 'The Complete 2024 Web Developemnt',
            price: 390,
            formattedPrice: '£3,900.00',
            reviewCount: 69,
            rating: 4,
        },
        {
            imgUrl:
                'https://www.courselounge.com/wp-content/uploads/best-udemy-courses-online.png',
          
            tutor:"Dr. Ayngu Yu",
            title: 'The Web Developer Bootcamp 2024',
            price: 230000,
            formattedPrice: '£2,300.00',
            reviewCount: 108,
            rating: 3,
        },
        {
            imgUrl:
                'https://churnzero.com/wp-content/uploads/2021/06/udemy.jpg',
        
            title: 'The Web Developer MasterClass Online 2024',
            tutor:"Dr. Ayngu Yu",
            price: 900,
            formattedPrice: '£900.00',
            reviewCount: 2567,
            rating: 5,
            best:"Best Seller"
        },
        {
            imgUrl:
                'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*tDvPpTA8Jw5P_B5xV8gsjw.jpeg',
            tutor:"Dr. Ayngu Yu",
            title: 'The Complete 2024 Web Developemnt',
            price: 390000,
            formattedPrice: '£3,900.00',
            reviewCount: 69,
            rating: 4,
        },
        {
            imgUrl:
                'https://www.courselounge.com/wp-content/uploads/best-udemy-courses-online.png',
            tutor:"Dr. Ayngu Yu",
            title: 'The Web Developer Bootcamp 2024',
            price: 230000,
            formattedPrice: '£2,300.00',
            reviewCount: 108,
            rating: 3,
        },
        {
            imgUrl:
                'https://churnzero.com/wp-content/uploads/2021/06/udemy.jpg',
            title: 'The Web Developer MasterClass Online 2024',
            tutor:"Dr. Ayngu Yu",
            price: 900,
            formattedPrice: '£900.00',
            reviewCount: 2567,
            rating: 5,
            best:"Best Seller"
        },
      
      
    ]
  return (
    <div>
        <div className='card'>
            <div className='card-container'>
                <div className='card-section' >
                   
                    {
                        cardData.map((data,index)=>(
                            <div key={index} className='card-container'>
                                <div  style={{width:"30vw"}}>
                                 <img style={{width:"100%"}} src={data.imgUrl}/>
                                 </div>
                                <div className='card-description'>
                                <h3>{data.title}</h3>
                                <p style={{color:"gray",fontSize:".8em"}}>{data.tutor}</p>
                                <h4> ${data.price}</h4>
                                <div className='rating'>
                                    {[...Array(data.rating)].map((star,i)=>{
                                        const ratingValue = i+1;
                                        return(
                                            <AiFillStar
                                            color={ratingValue>= star ?"teal":"#ffa534"}
                                            />
                                        )
                                    })}{' '}
                                </div>
                                <p>review :{data.reviewCount}</p>
            
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards