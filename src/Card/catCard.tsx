import { useState } from "react";

interface cat {
    name : string,  
    imgsrc: string, 
    gifsrc: string, 
    description : string 
}

export default function CatCard({name,  imgsrc, gifsrc, description}: cat) {
    const [currentImg, setCurrentImg] = useState(imgsrc);
    const [currentStatus, setCurrentStatus] = useState(false);
    console.log(currentImg);
    return (
            <div className={currentStatus ? "active-card card" : "card"} onMouseOver={() => setCurrentStatus(true)} onMouseOut={()=>setCurrentStatus(false)}>
                <h2>{name}</h2>
                <img id="catImg" onMouseOver={() => setCurrentImg(gifsrc)} onMouseOut={() => setCurrentImg(imgsrc)} className='CatImg' src={currentImg} alt="Não consegui carregar"></img>
                <p>{description}</p>
            </div>)           
}

