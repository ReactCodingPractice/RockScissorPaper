import React from 'react'
import '../App.css'
import { FaHandRock } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";

const Gamebuttons = () => {
  return (
    <>
      <FaHandScissors style={{ width: "30px", height: "30px" }} />
      <FaHandRock style={{ width: "30px", height: "30px" }} />
      <FaHandPaper style={{ width: "30px", height: "30px" }} />
    </>
  )
}

export default Gamebuttons;
