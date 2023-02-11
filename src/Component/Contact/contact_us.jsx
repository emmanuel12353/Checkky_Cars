import React from 'react';
import './contact_us.css'
function ContactUs() {
  return (
    <div className="container-fluid rounded" id='contact'>
         <div className='logop mb-5'>
      Get In Touch Today
</div>
    <div className="row px-5">
        <div className="col-sm-6">
            <div>
                <p className="textb">Have Feedback For Us, Drop A Message</p>
                <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                </p>
                <ul className='contactcon'>
                    <li className='contactconus'><i class="fa-solid fa-phone"></i>&nbsp; +234807778899778</li>
                    <li className='contactconus'><i class="fa-solid fa-envelope"></i> &nbsp; chesky@gmail.com</li>
                    <li className='contactconus'> <i class="fa-solid fa-location-pin"></i> &nbsp; Lorem ipsum dolor sit 
                    amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt  </li>
                </ul>
            </div>
            
        </div>
        <div className="col-sm-6 pad shadow">
            <form className="rounded msg-form">
                <div className='row'>
                    <div className='col'>
                    <div className="form-group"> 
                <label for="name" className="h6">First Name</label>
                    <div className="input-group border rounded">
                        <div className="input-group-addon px-2 pt-1">
                         
                        </div> <input type="text" className="form-control border-0" />
                    </div>
                </div>
                    </div>
                    <div className='col'>
                    <div className="form-group"> 
                <label for="name" className="h6">Last Name</label>
                    <div className="input-group border rounded">
                        <div className="input-group-addon px-2 pt-1">
                    
                        </div> <input type="text" className="form-control border-0" />
                    </div>
                </div>
                    </div>
                </div>
                <div className="form-group"> <label for="name" className="h6">Email</label>
                    <div className="input-group border rounded">
                        <div className="input-group-addon px-2 pt-1"> 
                       </div> 
                        <input type="text" className="form-control border-0" />
                    </div>
                </div>
                <div className="form-group"> <label for="msg" className="h6">Message</label> <textarea name="message" id="msgus" cols="10" rows="5" className="form-control bg-light" placeholder="Message"></textarea> </div>
                <div className="form-group d-flex justify-content-end"> 

                </div>
            </form>
            <button className='con mt-5 mb-5'>CONTACT US</button>
        </div>
 
    </div>
</div>
  );
}

export default ContactUs;
