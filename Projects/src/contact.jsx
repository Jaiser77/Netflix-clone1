import React from 'react'

export default function Contact() {
  return (
    <div>
      <section className='py-4 bg-info'>
       <div className='container'>
          <div className='row'>
              <div className='col-md-4 my-auto'>
                 <h4>Contact Us</h4>
              </div>
               <div className='col-md-8 my-auto '>
                 <h6 className='float-end'>
                     Home/Contact Us
                 </h6>
               </div>
          </div>
       </div>     
      </section>

      <section className='section'>
        <div className='container'>
           <div className='card shadow '>
               <div className='card-body'>
                   <div className='row'>
                       <div className="col-md-6">
                          <h6>Contact Form</h6>
                          <hr/>
                          <div className="form-group">
                             <label for="">Full Name</label>
                             <input type="text" className='form-control' placeholder="Enter Full Name" />
                          </div>
                          <div className="form-group">
                             <label for="">Phone Number</label>
                             <input type="text" className='form-control' placeholder="Enter Phone Number" />
                          </div>
                          <div className="form-group">
                             <label for="">Email</label>
                             <input type="text" className='form-control' placeholder="Enter your Email" />
                          </div>
                          <div className="form-group">
                             <label for="">Message</label>                           
                             <textarea rows="3" className='form-control' placeholder="Type your message"></textarea>
                          </div>
                          <div className="form-group py-3">                           
                             <button type='button' className='btn btn-primary shadow w-100' >Send Message</button>
                          </div>

                       </div>
                       <div className="col-md-6">
                            <h5 className='main-heading'>Address Information</h5>
                            <div className="underline"></div>
                            <p>
                              meaw,bangalore,world,universe7.-629175
                            </p>
                            <p>
                              Phn no: 0123456789
                            </p>
                            <p>
                              Email: 1234@gmail.com
                            </p>
                       </div>
                   </div>
               </div>
           </div>    
       </div>
      </section>
 
    </div>
  )
}
