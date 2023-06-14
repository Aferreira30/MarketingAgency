import { useState,useRef,useEffect } from "react";

import { Container } from "./style";

import seta from "../../../../img/setaBtn.svg";


export default function Comentarios(){
  const [data,setData]=useState([]);
  const slider = useRef(null);
  
  useEffect(()=>{
    fetch('http://localhost:3000/static/dados.json').then((response)=>response.json()).then(setData);
  },[])

  const handleLeftClick = (e) =>{
        e.preventDefault();
        slider.current.scrollLeft -= slider.current.offsetWidth;
  }
  const handleRightClick = (e) =>{
    e.preventDefault();
    slider.current.scrollLeft += slider.current.offsetWidth;
}

console.log(slider.current)
  return(
    <Container id="AboutUs">
    <div className="contTextoButtons">
          <div className="contTextos1">
            <h1>What Our Client Said about us</h1>
            <p>Use this section to describe your company </p>
          </div>
          <div className="buttons">
            <button onClick={handleLeftClick}><img src={seta} alt="Seta"  width={33.5} height={29.32}/></button>
            <button onClick={handleRightClick}><img src={seta} alt="Seta" width={33.5} height={29.32}/></button>          
          </div>
    </div>
      <div id="contSlider">
        <div className="sliderPoint" ref={slider} >
          {
            data.map((info)=>{
                const  {id,img,name,professions,text} = info;
                
                return(
                  <div className="contInfoSlider" key={id} >
                    <img src={img} alt="Pessoa" width={85} height={85}/>
                    <div className="contTextosSlider">
                      <h4>{name}</h4>
                      <span>{professions}</span>
                    </div>
                    <p>{text}</p>
                  </div>
                )
            })
          }
        </div>
      </div>
    </Container>
  )
}