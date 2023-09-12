import React,{useState,useEffect} from 'react';
import Title from './Title';
import Buttons from './buttons';
import { BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { FaUserAlt} from 'react-icons/fa';
import { BiCommentDetail} from 'react-icons/bi';
import './style.css';


export default function TestimonalsApp() {

 // const handleClick = ()=>{
   // console.log("My Click")
  //}
  const [testimonals,setTestimonals]=useState();
  const [items,setItems]=useState();
  useEffect(() => {
    if (testimonals) {
      fetch(`https://jsonplaceholder.typicode.com/${testimonals}`)
        .then((response) => response.json())
        .then((json) => setItems(json));
    }
  }, [testimonals]);
  return (
    <div className='container m-auto ' >
        <Title className={'title'} text={"Testimonals App"} /> 

          <Buttons text={"Posts"}
         btnClass={"btn-info btn-md"} 
         icon={<BsFillFileEarmarkPostFill />} 
         onClick = {()=>setTestimonals("Posts")}
         />
         

          <Buttons text={"Users"}
         btnClass={"btn-info btn-md"} 
         icon={<FaUserAlt/>}
         onClick = {()=>setTestimonals("Users")}
          />

         
          <Buttons text={"Comments"}
         btnClass={"btn-info btn-md"} 
         icon={<BiCommentDetail/>}
         onClick = {()=>setTestimonals("Comments")}
          />
     
       <Title  classes={'subtitle text-primary'} text={!testimonals ? "Select from above!" : testimonals} />
       {!items 
       ? null
       : items.map((item) =>{
        return <div className='card card-primary mb-2' key={item.id}>{item.name && <h2 className='card-header'>{item.name}</h2>}
        <div className="card-body">
          <h4>{item.title}</h4>
          <h4>{item.body}</h4>
        </div>
           {item.email &&(
            <small className='card-footer'> {item.email} </small>
           )}
        </div>;

       })}
    </div>
  );
}
 