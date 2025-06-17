import React from 'react'
import { Container, Col , Row } from 'react-bootstrap'
import CarBodyType from './CarBodyType';



const CarLogo = () => {
   let cars = [
    {carName : "Toyota" , image: "https://www.carlogos.org/car-logos/toyota-logo.png"},
    {carName : "Ford", image: "https://www.carlogos.org/car-logos/ford-logo.png"},
    {carName :"Tesla" , image: "https://www.carlogos.org/car-logos/tesla-logo.png"},
    {carName : "Honda" , image: "https://www.carlogos.org/car-logos/honda-logo.png"},
    {carName :"BMW" , image: "https://www.carlogos.org/car-logos/bmw-logo.png"},
    {carName : "Subaru" , image: "https://www.carlogos.org/car-logos/subaru-logo.png"},
    {carName : "Volkswagen" , image: "https://www.carlogos.org/car-logos/volkswagen-logo.png"},
    {carName :"Cadillac"  , image: "https://www.carlogos.org/car-logos/cadillac-logo.png"},
    {carName : "Peugeot" , image: "https://www.carlogos.org/car-logos/peugeot-logo.png"},
    {carName :"Suzuki" , image: "https://www.carlogos.org/car-logos/suzuki-logo.png"},
    {carName :"KIA" , image: "https://www.carlogos.org/car-logos/kia-logo.png"},
    {carName : "Mitsubishi", image: "https://www.carlogos.org/car-logos/mitsubishi-logo.png"},
   ];

//    cars.forEach(function (car) {
//         const displayCar = document.createElement("div")
//         displayCar.innerHTML = `
//         <img src=${car.image} className="img-fluid">
//         <p>${car.carName}</p>
//         `
//         document.querySelector(".container").appendChild(displayCar)

//         console.log(cars)
//     });
    
    
    
    return (
        <div className="carMajor">
        <Container>
            <h3>Rent by Brands</h3>
        <div className='containerlogo'> 
            {cars.map((car, index)=>(
                <a href="" key={index} >
                <div  className='carlogo'>
                    <img src = {car.image} />
                    <span>{car.carName}</span>
                </div>
                </a>
            ))}
        </div>
    </Container>
    <CarBodyType/>
    </div>
  )
}

export default CarLogo