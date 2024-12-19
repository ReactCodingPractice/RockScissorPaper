import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import { FaHandRock } from "react-icons/fa";
import { FaHandScissors } from "react-icons/fa";
import { FaHandPaper } from "react-icons/fa";


const images = {
  rock : "https://cdn-icons-png.flaticon.com/512/6685/6685683.png",
  scissor: "https://cdn-icons-png.flaticon.com/512/2132/2132689.png",
  paper: "https://www.svgrepo.com/show/9450/paper.svg",
}

const comImages = {
  0 : "https://cdn-icons-png.flaticon.com/512/6685/6685683.png",
  1 : "https://cdn-icons-png.flaticon.com/512/2132/2132689.png",
  2 : "https://www.svgrepo.com/show/9450/paper.svg",
}


const App = () => {

  const [image, setImage] = useState("");
  const [comImageNum, setComImageNum] = useState(null);
  const [result, setResult] = useState("");
  const [result2, setResult2] = useState("");
  const [result3, setResult3] = useState("");



  const handlebutton = (imageOne) => {
    const imageNum = Math.floor(Math.random() * 3);
    setComImageNum(imageNum);
    setImage(imageOne);

    if (imageOne === images.rock) {
      const res = imageNum === 0 ?  "TIE" : imageNum === 1 ? "WINNER" : "LOSER";
      const comres = imageNum === 0 ? "TIE" : imageNum === 1 ? "LOSER" : "WINNER";
      const finalres = imageNum === 0 ?  "TIE" : imageNum === 1 ? "WIN" : "LOSE";
      setResult(res);
      setResult2(comres);
      setResult3(finalres);
  
    } else if (imageOne === images.scissor) {
      const res = imageNum === 1 ? "TIE" : imageNum === 2 ? "WINNER" : "LOSER";
      const comres = imageNum === 1 ? "TIE" : imageNum === 2 ? "LOSER" : "WINNER";
      const finalres = imageNum === 1 ?  "TIE" : imageNum === 2 ? "WIN" : "LOSE";
      setResult(res);
      setResult2(comres); 
      setResult3(finalres);
    
    } else if (imageOne === images.paper) {
      const res = imageNum === 2 ?  "TIE" : imageNum === 0 ? "WINNER" : "LOSER";
      const comres = imageNum === 2 ? "TIE" : imageNum === 0 ? "LOSER" : "WINNER";
      const finalres = imageNum === 2 ?  "TIE" : imageNum === 0 ? "WIN" : "LOSE";
      setResult(res);
      setResult2(comres);
      setResult3(finalres);
    } 
  
  }



  return (
    <div className='container'>
      <div className='boxes'>
        <Box player="you" image={image} result={result} />
        <Box player="computer" image={comImages[comImageNum]} result={result2}/>
      </div>
      <div className='gamebuttons'>
        <button style = {{ backgroundColor: "white", border: "none", cursor: 'pointer' }} onClick={() => handlebutton(images.scissor)}>
          <FaHandScissors style={{ width: "30px", height: "30px" }} />
        </button>
        <button style = {{ backgroundColor: "white", border: "none", cursor: 'pointer' }} onClick={() => handlebutton(images.rock)}>
          <FaHandRock style={{ width: "30px", height: "30px" }} />
        </button>
        <button style = {{ backgroundColor: "white", border: "none", cursor: 'pointer' }} onClick={() => handlebutton(images.paper)}>
          <FaHandPaper style={{ width: "30px", height: "30px" }} />
        </button>
      </div>
      <div className='result'>
        <h4>{result3}</h4>
      </div>
    </div>
  );
}

export default App;
