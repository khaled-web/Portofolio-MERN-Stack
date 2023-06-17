import React from 'react'
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLaptopCode,
  FaServer,
  FaTools,
  FaTasks
}
from 'react-icons/fa'
import layalinaImg from '../assets/images/LayalinaCoffe-imag.jpeg'
import rightCarsImg from '../assets/images/RightCars-Skills.jpeg'
import cozyHouseImg from '../assets/images/CozyHouse.jpeg'
import sandraToursImg from '../assets/images/SandraTours-1.jpg'
import familyRestaurantImg from '../assets/images/The Family restaurant-projects.jpg'
import teaMarketImg from '../assets/images/TeaMarket.jpg'


export const links = [{
    id: 1,
    text: 'Home',
    path: '/'
  },
  {
    id: 2,
    text: 'About',
    path: '/about'
  },
  {
    id: 3,
    text: 'Projects',
    path: '/projects',
  },
  {
    id: 4,
    text: 'Contact',
    path: '/contact',
  }
]

export const SocialMedia = [
  {
    id: 1,
    url: 'https://www.linkedin.com/',
    icon: < FaLinkedin/>
  },
  {
    id: 2,
    url: 'https://www.facebook.com/',
    icon: < FaFacebookSquare/>
  },
  
  {
    id: 3,
    url: 'https://www.twitter.com/',
    icon: < FaTwitterSquare/>
  },
  {
    id: 4,
    url: 'https://www.instagram.com/',
    icon: < FaInstagramSquare/>
  },
]

export const services = [{
    id: 1,
    title: "Front-End Development",
    subject: "Developing and implementing highly responsive user interface components using react concepts.",
    icon: < FaLaptopCode/> ,
    style: 'service-item-black'
  },
  {
    id: 2,
    title: "Back-End Development",
    subject: "Knowledge of backend technologies and database systems using Node.js and MongoDB.",
    icon: < FaServer/> ,
    style: 'service-item-white'
  },
  {
    id: 3,
    title: 'Testing',
    subject: 'Knowledge of performance testing frameworks including Mocha and Jest.',
    icon: < FaTools/> ,
    style: 'service-item-black'
  },
  {
    id: 4,
    title: 'Maintenance',
    subject: 'Troubleshooting interface software and debugging application codes.',
    icon: < FaTasks/> ,
    style: 'service-item-white'
  }
]

export const projects = [{
    id: 1,
    style: 'project-1',
    img: layalinaImg,
    title: 'Layalina Coffee',
    owner: 'Ishaaq Ghawer',
    subject: 'Layalina Coffee was conceived with the conviction that every espresso cup should stay true to its origin, whether prepared by a barista or by you.',
    url: 'https://layalina-coffee.netlify.app/#'
  },
  {
    id: 2,
    style: 'project-2',
    img: rightCarsImg,
    title: 'RightCars Agency',
    owner: 'Dorian Aron',
    subject: 'RightCars agency provide a vast selection of new and used vehicles with affordable prices, exceptional car care, and customer service with a smile!',
    url: 'https://rightcars.netlify.app/'
  },
  {
    id: 3,
    style: 'project-3',
    img: cozyHouseImg,
    title: 'CozyHouse',
    owner: 'Tolstoy Leo',
    subject: 'CozyHouse has a new vision to make the best of anything that they build as furniture because The design creates culture. Culture shapes values. Values determine the future.',
    url: 'https://cozyyhouse.netlify.app/'
  },
  {
    id: 4,
    style: 'project-4',
    img: sandraToursImg,
    title: 'Sandra Tours',
    owner: 'Sandra Madyan',
    subject: 'This journey of research, bookings and travel purchases starts long before people step on the plane, sandra tours company gives you more information about tourism trips.',
    url: 'https://sandratours.netlify.app/index.html'
  },
  {
    id: 5,
    style: 'project-5',
    img: familyRestaurantImg,
    title: 'The Family Restaurant',
    owner: 'john William',
    subject: 'The family restaurant is operating from an understanding of the targets of customers to appeal directly to their needs and interests.',
    url: 'https://thefamilyrestaurant.netlify.app/'
  },
  {
    id: 6,
    style: 'project-6',
    img: teaMarketImg,
    title: 'The Family Restaurant',
    owner: 'john William',
    subject: 'Drinking tea has many health benefits. tea can be a tasty beverage since it can be served iced or hot. , along with healthy teas, you should try.',
    url: 'https://teamarket-cairo.netlify.app/'
  }
]

export const skills = [{
    id: 1,
    title: 'Front-End',
    tools: ['HTML', 'CSS/SCSS', 'JavaScript', 'React.js']
  },
  {
    id: 2,
    title: 'Back-End',
    tools: ['Node.js', 'Express.js', 'MongoDB']
  }
]