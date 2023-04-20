import React from 'react';
import '../App.css'; 
import { Button } from './Button'; 
import './HeroSection.css'; 

function HeroSection() {
  return (
    <section className="about-me">
    <div className="about">
    <img src={require('../images/me.jpg')} className='pic' />
      <div className="text">
        <h1>Hello!</h1>
          <p>I am Kuschell Jane and I am currently finishing my degree in Bachelor of Science in Information Technology. 
              I am now having my internship at Teravision Corp. which exposes me to various sets of knowledge. 
              I have basic pieces of knowledge of HTML, CSS, PHP, JS, and 
              ReactJS. I am also knowledgeable when it comes to database management using Microsoft SQL Server and phpMyAdmin.  
             Aside from all these tech skills, I spent my free time doing crochet 
              work which serves as my hobby.</p>
        
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
