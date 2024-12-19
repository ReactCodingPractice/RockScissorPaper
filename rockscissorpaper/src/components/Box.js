import React from 'react'
import '../App.css';

const Box = ({ player, image, result }) => {

  const boxColor = (result === "" || result === "TIE")  ? '' : result === "WINNER" ? 'boxwin' : 'boxlose'; 

  return (
    <div className={`box ${boxColor}`}>
      <h1>{player}</h1>
      {image && <img src = {image} style={{ width: "450px", height: "450px" }} alt="이미지" /> }
      <h2>{result}</h2>  
    </div>
  )
}

export default Box;
