import React from 'react';
import '../App.css'; 
import { Button } from './Button'; 
import './Connect.css'; 

function Connect() {
  return (
    <div className="connect">
      <div className="title">
        <h1>Get in touch </h1>
          <p>If you'd like to know more about my work or process, feel free to connect with me. Let's make your creative
            juices flow and concretise ideas that you currently have in mind.</p>
            <div className="row">
                <div className="column">
                    <i class="fa fa-map-marker"></i>
                    <p>ADDRESS</p>
                    <a href="">Tagaytay City, Cavite</a>
                </div>
                <div className="column">
                    <i class="fa fa-mobile"></i>
                    <p>PHONE</p>
                    <a href="tel:+63 917 584 4081">+63 917 584 4081</a>
                </div>
                <div className="column">
                    <i class="fa fa-envelope"></i>
                    <p>EMAIL</p>
                    <a href="mailto:schellaneam@gmail.com">schellaneam@gmail.com</a>
                </div>
              </div>
          <div className='input-areas'>
          <form action="https://formspree.io/f/myyalgvo" method="POST">
          <h4 className='subtitle'>I would love to hear from you.</h4>
          <br></br>
            <label>Name<input
              className='input-name'
              name='name'
              type='text'
              required
            /> </label>
            <label>Email<input
              className='input-email'
              name='email'
              type='email'
              required
            /></label>
            <label>Subject<input
              className='input-subject'
              name='subject'
              type='text'
              required
            /></label>
            <label>Message<textarea 
              name='message'
              cols="89.5" 
              rows="10"
              required
            /></label>
            <div className='connect-btns'>
             <Button className = "submit" buttonStyle='btn--primary'>Submit</Button></div>
            </form>
            </div>
      </div>
      </div>
  )
}

export default Connect


