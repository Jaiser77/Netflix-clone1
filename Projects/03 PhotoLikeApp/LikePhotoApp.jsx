import React,{useState} from 'react';
import Title from './Title';
import './App.css';
import {BiSmile } from "react-icons/bi";
import {AiFillHeart,
    AiOutlineHeart,
    AiOutlineComment } from "react-icons/ai";
    import Dog from './08img1.jpg';
export default 
function LikePhotoApp() {
   // let like=false;
    const[like,setLike]=useState(false);
    const[count,setCount]=useState(0);
    const toggleLike=()=>{
      if(!like){
        setLike(true);
        setCount(count + 1);
      }else{
        setLike(false);
        setCount(count -1);
      }
    }
  return (
    <div className='container text-center'>
    <Title text={" LikePhotoApp"}/>
    <Title classes={" subtitle"} text={`Likes ${count}`}/>
        <div className="card card-dark m-auto"
         style={{width: 300,cursor:"pointer",margin: "auto",backgroundColor:  " rgb(43, 58, 226" }} onDoubleClick={toggleLike}>
        
              <div className="card-header fs xl" style={{color:'aliceblue'}}>
                <BiSmile className="me-2"/>
             <small>DogyDog</small>  
              </div>
                  <img src={Dog} alt="img" 
                  style={{height:"fit-content" }}/>
              <div className="card-footer fs-xl d-flex"
               style={{ justifyContent:"space-between"}} >
              <AiOutlineComment style={{color:'aliceblue'}}/>{like?(<AiFillHeart className='text-danger' onClick={toggleLike} style={{color:'aliceblue'}}/>):
              (<AiOutlineHeart onClick={toggleLike} style={{color:'aliceblue'}}/>)}
              </div> 
        </div>
    </div>
  )
}
 
