import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


import { Pagination, Navigation, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'I\'m incredibly impressed with your full-stack web application development services. Your expertise in front-end and back-end technologies resulted in a seamless and engaging user experience. The integration of RESTful APIs and implementation of secure authentication truly made our web application robust and reliable.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Thank you for handling our web application deployment and infrastructure management with such professionalism and expertise. Your cloud-based deployment and scalable infrastructure setup ensured our application\'s smooth performance and availability. We appreciate the continuous monitoring and data backup solutions you put in place for added security and peace of mind.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Your dedication to web application testing and quality assurance has exceeded our expectations. The comprehensive API testing, cross-browser compatibility checks, and efficient bug tracking led to a flawless end product. Your attention to detail and commitment to performance testing ensured our web application delivered an outstanding user experience.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Your exceptional customer service has been the backbone of our collaboration. You\'ve been incredibly responsive, attentive, and accommodating throughout the project. Your willingness to address our concerns and provide timely updates made the entire development process a breeze. Working with you has been an absolute pleasure, and we look forward to more successful projects together.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Navigation, Scrollbar]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials;
