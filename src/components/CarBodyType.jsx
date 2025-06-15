import React from 'react'
import { Container } from 'react-bootstrap'

const CarBodyType = () => {
    let bodyType = [
        {carBody : "SUV", bodyImage :"https://img.freepik.com/free-vector/modern-urban-adventure-suv-vehicle-illustration_1344-200.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody : "Convertible", bodyImage: "https://img.freepik.com/free-vector/convertible-car-concept-illustration_114360-13229.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"MBP" , bodyImage: "https://img.freepik.com/premium-vector/suv-car-expedition-concept-vehicle-cargo-carriers-with-rack-luggage-vector-winter-season_135661-837.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody: "Truck" , bodyImage:"https://img.freepik.com/free-vector/hand-drawn-transport-truck_23-2149166401.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody: "Coup" , bodyImage:"https://img.freepik.com/premium-vector/light-blue-sedan-car-with-female-driver-side-view-vector-illustration-white-background_178650-22882.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Sedan" , bodyImage : "https://img.freepik.com/free-vector/sedan-car-concept-illustration_114360-13223.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Sport" , bodyImage :"https://img.freepik.com/free-vector/sports-car-concept-illustration_114360-13217.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Limousine" , bodyImage :"https://img.freepik.com/premium-vector/black-limo-iconluxury-limousine-car_951778-86946.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Jeep" , bodyImage :"https://img.freepik.com/premium-vector/isolated-off-road_1344-140.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Compact" , bodyImage :"https://img.freepik.com/premium-vector/hatchback-car-blue-coloured-flat-style-vector-illustration_787461-1491.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Minivan" , bodyImage :"https://img.freepik.com/premium-vector/minibus-vector-illustration-minivan-isolated-white-background_338371-1315.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"},
        {carBody:"Hilux" , bodyImage :"https://img.freepik.com/premium-vector/classic-pickup-truck_620461-12946.jpg?ga=GA1.1.445123966.1745104822&semt=ais_hybrid&w=740"}
    ];
  return (
    <Container className='carBody'>
        <h3>Rent by body type</h3>
        <div className="conatinerbody">
            {bodyType.map((body , index) =>(
               <a href=""  key={index}>
                <div className="carlogo">
                    <img src = {body.bodyImage}  />
                    <span>{body.carBody}</span>
                </div>
               </a> 
            ))}
        </div>
    </Container>
  )
}

export default CarBodyType