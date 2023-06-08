import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Portfolio</h2>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Elsewhere</h2>
            <Link to='https://github.com/kuschelljane' target='_blank'>GitHub</Link>
            <Link to='https://drive.google.com/file/d/1QOVClpb-0NtAAhtt8UiGpFvB80MkU06L/view?usp=sharing' target='_blank'>Curriculum Vitae</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/contact'>Message</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Links</h2>
            <Link to='https://www.linkedin.com/in/kuschell-jane-amulong-400034181'target='_blank'><i class='fab fa-linkedin' />LinkedIn</Link>
            <Link to='https://www.upwork.com/freelancers/~0160bfaba66a47d656' target='_blank'><i class="fa fa-reply"  />Upwork</Link>
          </div>
        </div>
      </div>
      
      <br></br><br></br>
      <small class='website-rights'> ©2023 Kuschell Jane's Work Portfolio.</small>
    </div>
  );
}

export default Footer;