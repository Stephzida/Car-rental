import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Review = () => {
  const  [currentIdx , setCurrentIdx]= useState(0)
  const [activeButton , setActiveButton] = useState("")
    const reviews = [
        {id:1 , content:'"I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience"' , userImage:"https://media.istockphoto.com/id/1040112448/photo/head-shot-portrait-of-beautiful-chinese-girl-in-green-shirt-sitting-and-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=0xt-jJ7bTSeQb4Mv1LQgVcGYXM6U7w08AFOJcsobe8o=" , userName:"Mi-ho" , location:"From Korean"},
        {id:2 , content:'"The service I received from this car rental company exceeded my expectations. Everything from booking to pickup was seamless, and the vehicle was clean, reliable, and in great shape. The staff were courteous and attentive, making the entire process stress-free. I would highly recommend them to anyone in need of a quality rental experience."' , userImage:"https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_640.jpg" , userName:"Joycee Anne" , location:"From Texas"},
        {id:3 , content:'"Excellent experience from start to finish! The rental process was quick and hassle-free, and the car was spotless and ran perfectly. The team was welcoming and professional, always ready to assist. I truly appreciated the top-notch service and would gladly use this company again."' , userImage:"https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_640.jpg" , userName:"Sophie Moe" , location:"From Boston"}
    ];
  return (
    <div>
        <Container className='review'>
            <div className="reviewNav">
               <h4 >What Our Customers Say</h4>
                <div className="nav-icon">
                    <button onClick={()=>{
                        setCurrentIdx(currentIdx >0 ? currentIdx - 1 : reviews.length-1);
                        setActiveButton("previous");
                        // setTimeout(()=> setActiveButton(null), 200);
                        }} 
                        className={activeButton === "previous" ? 'active' : ""}
                        ><i class="bi bi-arrow-left-short"></i></button>
                    <button onClick={()=>{
                        setCurrentIdx(currentIdx <  reviews.length-1 ? currentIdx + 1  : 0)
                            // alert('Next clicked')
                            setActiveButton("next");
                        // setTimeout(()=> setActiveButton(null), 200);
                    }}
                    className={activeButton === "next" ? 'active' : ""}
                    ><i class="bi bi-arrow-right-short"></i></button>
                </div>
            </div>
            <div className="reviews" key={reviews[currentIdx].id}>
                    <p>{reviews[currentIdx].content}</p>
                    <div className="profile">
                        <img src={reviews[currentIdx].userImage} alt="profile" />
                        <div className="profileText">
                            <span>{reviews[currentIdx].userName}</span>
                            <span>{reviews[currentIdx].location}</span>
                        </div>
                    </div>
            </div>
        </Container>
    </div>
  )
}

export default Review