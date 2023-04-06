import React from 'react'
import Cards from './Cards'

const Header = () => {
  return (
    <>
    <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">StarClinch</a>
  <div class="collapse navbar-collapse" id="navbarText">
    <span class="navbar-text">
      Hello, Manish
    </span>
  </div>
</nav>
</header>
<h1 className='mt-2 text-center'><b>Shortlist</b></h1>
 <h5 className='mt-3 ml-5'>Details:</h5>
 <div className='container-fluid mt-5'>
  <div className='d-flex justify-content-around'>
    <div>
      <p><b>Event Date</b></p>
      <p>2023-02-22</p>
      </div>
    <div>
      <p><b>Location</b></p>
      <p>Delhi,India</p>
    </div>
    <div>
      <p className='fs-1'><b>Budget</b></p>
      <p>5,00,000</p>
    </div>
  </div>
  <div className='container'>
    <Cards/>
  </div>
  </div>
    </>
  )
}

export default Header