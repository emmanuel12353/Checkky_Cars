import React from 'react';
import '../../Component/Filter/side.css';
function SideBar() {
  return (
    <div className='filt'>
           <div className='filtmain p-3'>
      Filter
      </div>
      <div className='filtmain1 mt-2 p-3'>
      car spec
      </div>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Air conditioning
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   4+ doors
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    wifi
  </label>
</div>
    
<div className='filtmain1 mt-2 p-3'>
      car Company
      </div>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Avis
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
  thrifty
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    sixt
  </label>
</div>

<div className='filtmain1 mt-2 p-3'>
      car Size
      </div>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    small
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
   medium
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
  <label class="form-check-label" for="flexCheckChecked">
    large
  </label>
</div>
<div className='filtmain1 mt-3 p-3'>
      car Company
      </div>
      <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    free cancelation
  </label>
</div>
<div class="form-check pb-5">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
 flexible cancellation
  </label>
</div>


     </div>

  );
}

export default SideBar;
