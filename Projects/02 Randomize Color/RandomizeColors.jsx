 import React from 'react'
 import Title from './Title' 
export default function RandomizeColors(){
    function handleClick (event){
        console.log(event.target);
    }

    const handleSecClick = (e)=>{
       // console.log(e.target);
        console.log(getRandomColor());
        let body=document.querySelector("body");
        body.style.background= getRandomColor();
        e.target.style.backgroundColor=getRandomColor();
        
    };

    function getRandomColor(){
        let letters="0123456789ABCDEF";
        let color="#" ;
        for(let i=0; i<6; i++){
            color+= letters[Math.floor(Math.random()*16)];
        }
        return color;
    }
    return(
        <div className="container m-auto text-center">
            <Title text ={"Randomize Color"} classes={("mb-4")} />
            <button className='btn-danger' onClick={(event)=>{handleClick(event)}} 
            style={{ marginRight: '5px' }}>Click me</button>
            
            <button className='btn-success' onClick={handleSecClick}
            style={{ marginRight: '5px' }}>Click me</button>
            
            <button className='btn-primary' onClick={handleSecClick}
             style={{ marginRight: '5px' }}>Click me</button>
            
            <button className='btn-warning' onClick={handleSecClick}
            style={{ marginRight: '5px' }}>Click me</button>
        
        </div>
    );
}