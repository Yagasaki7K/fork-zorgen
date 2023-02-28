import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ProjectOne from '../../assets/images/projetos-1.svg'
import ProjectTwo from '../../assets/images/projetos-2.svg'
import ProjectThree from '../../assets/images/projetos-3.svg'
import ProjectFour from '../../assets/images/projetos-4.svg'
import ProjectFive from '../../assets/images/projetos-5.svg'


export default () => {
  return (
    <>
    <h1 className='text-center font-bold text-xl text-titulos mb-7'>Projetos</h1>
    <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={15}
      slidesPerView={2}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      breakpoints={{
        1040: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 10
        }
      }}
    > 
      <SwiperSlide><img src={ProjectOne} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ProjectTwo} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ProjectThree} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ProjectFour} alt="" /></SwiperSlide>
      <SwiperSlide><img src={ProjectFive} alt="" /></SwiperSlide>
    </Swiper>
    </>
  );
};