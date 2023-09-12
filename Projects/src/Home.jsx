import React from 'react';

import { Link } from 'react-router-dom';
import Vmc from './vmc';
import Slider1 from './08img1.jpg';

export default function Home() {
  return (
    <div>
  
     
       <section className='section'>
          <div className="container">
             <div className="row">
                <div className='col-md-12 text-center'>
                     <h3 className='main-heading'>
                      Our Company </h3>
                       <div className="underline mx-auto"></div>
                       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, illum? Voluptates nam esse, magni, labore sed ratione minima veniam vero inventore tempora vel facere cupiditate! Consequatur modi fugit est? Voluptatum?</p>
                       <Link to="/About" className="btn btn-warning shadow">Read More</Link>                    
                </div>
             </div>
          </div>
       </section>

      <Vmc/>
      {/*our Services*/}
      <section className='section border-top'>
    <div className="container">
       <div className="row">
          <div className='col-md-12 mb-5 text-center'>
               <h3 className='main-heading'>
                Our Services</h3>
                 <div className="underline mx-auto"></div>                                   
          </div>
            <div className="col-md-4 ">
              <div className="card shadow">
              <img src={Slider1} className='w-100 h-100 border bottom' style={{ objectFit: "cover", maxHeight: "200px" }} />
                  <div className="card-body">
                    <h6>Service 1</h6>
                    <div className="underline"></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident porro hic doloremque quis, a necessitatibus nobis vero similique consequuntur.</p>
                  <Link to ='/Services' className='btn btn-link' >read more </Link>
                  </div>
              </div>
             
              
            </div>
  
            <div className="col-md-4 ">
              <div className="card shadow">
              <img src={Slider1} className='w-100 h-100 border bottom' style={{ objectFit: "cover", maxHeight: "200px" }} />
                  <div className="card-body">
                    <h6>Service 2</h6>
                    <div className="underline"></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident porro hic doloremque quis, a necessitatibus nobis vero similique consequuntur.</p>
                  <Link to ='/Services' className='btn btn-link' >read more </Link>
                  </div>
              </div>
             
              
            </div>
 
            <div className="col-md-4 ">
              <div className="card shadow">
              <img src={Slider1} className='w-100 h-100 border bottom' style={{ objectFit: "cover", maxHeight: "200px" }} />
                  <div className="card-body">
                    <h6>Service 3</h6>
                    <div className="underline"></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores provident porro hic doloremque quis, a necessitatibus nobis vero similique consequuntur.</p>
                  <Link to ='/Services' className='btn btn-link' >read more </Link>
                  </div>
              </div>
             
              
            </div>

           
       </div>
    </div>
     </section>

    </div>
  )
}
