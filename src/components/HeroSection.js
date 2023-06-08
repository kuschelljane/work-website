import React from 'react';
import '../App.css'; 
import { Button } from './Button'; 
import './HeroSection.css'; 

function HeroSection() {
  return (
    <section className="about-me">
    <div className="about">
    <img src={require('../images/grad.jpg')} className='pic' />
      <div className="text">
        <h1>Hello!</h1>
          <p>I am a fresh graduate of Bachelor of Science in Information Technology at Rogationist College – Cavite. 
            My specialization is front-end development and I have pursued it through my three-month internship. 
            I have learned the fundamentals of ReactJS and used it through the websites that I have produced. 
            Other than this, I also know the basics of HTML, CSS, PHP, MySQL and WordPress.    </p>
        
        <div className='hero-btns'>
        <Button className = 'btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>Contact Me <i className = 'fa fa-phone' /></Button>
      </div>
      
      </div>
    </div>
  </section>
  )
}

export default HeroSection
