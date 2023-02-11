import React from 'react';
import './topofer.css';
import top1 from '../../Pics/icon/image10.png';
import top2 from '../../Pics/icon/image11.png';
import top3 from '../../Pics/icon/image12.png';


function Top({Users}) {
    console.log(Users);
  return (
    <div class="container mt-5">
    <div class="text-center mb-3">
    <div className='logop mb-5'>
    What Makes Us Stand Out
</div>
    </div>
    <div class="row g-2">
        
        <div class="col col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <div class="card top1">
                <img src={top1} className='tops' alt=''/>
                <p className='top11'>FLEXIBLE RENTALS</p>
                <p className='top12'>cancel or change most booking for free upto 48 hours of before pickup</p>
            </div>
        </div>
        
        <div class="col col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <div class="card top2">
                <img src={top3} className='tops' alt='' />
                <p className='top11'>NO HIDDEN FEES</p>
                <p className='top12'>knowing what you are paying for</p>
            </div>
        </div>
        
        <div class="col col-lg-4 col-md-4 col-sm-4 col-xs-6">
            <div class="card top3">
                <img src={top2} className='tops' alt='' />
                <p className='top11'> PRICE MATCH GUARANTEE</p>
                <p className='top12'>fund thesame deal for less, we will merge the price</p>
            </div>
        </div>
        
    </div>
    
    
</div>
  );
}

export default Top;
