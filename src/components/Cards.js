import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Button } from './Button'; 

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/counter.PNG')}
              text='A shopping counter app which incresases, decreases and resets the numbers. '
              label='ReactJS Counter App'
              path='https://kuschelljane.github.io/counter-app/' 
            />
            <CardItem
              src={require('../images/adventure.PNG')}
              text='A front-end website that is intended for adventures of a travel agency group which includes the homepage, services, products and signup. '
              label='ReactJS Adventure Website'
              path='https://kuschelljane.github.io/react-website/'
            />
            <CardItem
              src={require('../images/restaurant.PNG')}
              text='A front-end website that is intended for restaurants to showcase their various meals and unique delicacies.  '
              label='ReactJS Restaurant Website'
              path='https://kuschelljane.github.io/restaurant-website/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/pizza.PNG')}
              text='A front-end website that is intended for pizza shops to showcase their various flavors and specialties.'
              label='React Next.JS Pizza Website'
              path=''
            />
            <CardItem
              src={require('../images/cologic.jpg')}
              text='A front-end website that is intended for cologic users -  group of experts, learners, and creators. '
              label='HTML & CSS Cologic Website'
              path=''
            />
            <CardItem
              src={require('../images/croschell.PNG')}
              text='A front-end website for a specific brand which caters handmade items by crocheting.'
              label='HTML & CSS Croschell Website'
              path=''
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../images/rc.png')}
              text='A website that is intended for the services offered and that will manage the posting of the school including all of its functionalities.'
              label='Full-stack RC Website'
              path=''
            />
             <CardItem
              src={require('../images/clearance.PNG')}
              text='A system that deals with clearances in a manner of paperless system. It has the admin and students dashboard including its functions.'
              label='Automated Clearance System'
              path=''
            />
            <CardItem
              src={require('../images/trio.PNG')}
              text='A compiled game which consists of different games including neighborhood pickup, snowboard, and quiz master. '
              label='Unity Games'
              path=''
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
