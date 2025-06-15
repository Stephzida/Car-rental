import React from 'react'
// import App from './App.jsx'

const Button = ({message , active, onClick}) => {
  return (
    <button  onClick={onClick} className={`reusableBtn ${active ? "active" :""}`}> {message}</button>
  )
}

export default Button