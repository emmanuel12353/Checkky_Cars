import React from 'react';
import './foot.css';
import img4 from '../../Pics/frame2.png';

function Foot() {
  return (
    <div className='foot'>
     <div class="container justify-content-center">
                  <img src={img4} alt='' className='logo2' />
                    <div class="justify-content-center footp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                     nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit
                      in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                       occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum. 
        </div>
        <p className='footpara'>social</p>
        <div class="icons_container">
         <div class="icon facebook">
           
            <span><i class="fab fa-facebook-f"></i></span>
         </div>
         <div class="icon twitter">
           
            <span><i class="fab fa-twitter"></i></span>
         </div>
         <div class="icon instagram">
         
            <span><i class="fab fa-instagram"></i></span>
         </div>
         <div class="icon youtube">
            
            <span><i class="fab fa-youtube"></i></span>
         </div>
      </div>
    </div>
    <p className='copy'>&copy; All Right Reserved By Chesky</p>
    </div>
   
     
  );
}

export default Foot;
