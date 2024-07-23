import React from 'react';
import './HeroSec.css';

function HeroSec() {
  return (
    <div className="container-fluid p-5 mb-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 d-flex flex-column align-items-center">
          <img
            src="media/images/homeHero.png"
            alt="Hero Image"
            className="img-fluid mb-4 hero-image"
          />
        <div className='row text-center mb-5'>
        <h1 className='mb-4'>Invest in everything</h1>
        <p className='mb-4'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='btn btn-primary' style={{margin: "0 auto"}}>Sign up now</button>
      </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
