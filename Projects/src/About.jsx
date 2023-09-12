import React from 'react';
import Vmc from './vmc';

export default function About() {
  return (
    <div>
          <section className='py-4 bg-info'>
             <div className="container">
                 <div className="row">
                   <div className="col-md-4 my-auto">
                     <h6 >About Us</h6>
                   </div>
                   <div className="col-md-8 my-auto">
                     <h6 className='float-end'>Home/About Us</h6>
                   </div>
                 </div>
             </div>
          </section>

          <section className='section  border-bottom'>
             <div className="container">
               <h5 className='main-heading'>Our Company</h5>
                   <div className="underline"></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta suscipit, totam fuga distinctio adipisci quae placeat corporis consectetur recusandae. Fugiat vero ea dicta quo unde perferendis fuga et exercitationem aliquam.</p>   
                                   
             </div>
          </section>
          <Vmc/>

    </div>
  )
}
