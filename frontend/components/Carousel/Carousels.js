import React from 'react';
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// install Virtual module
SwiperCore.use([ Navigation, Pagination]);

export default function Carousels() {



    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                    375: {
                      slidesPerView: 1,
                    },
                    1000: {
                      slidesPerView: 2,
                    },
                  }}
                
            >

                <SwiperSlide>
                    <img 
                        src="/1.jpeg" />
                </SwiperSlide>
                <SwiperSlide>                  
                    <img
                    src="/2.jpeg" />             
                     </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/3.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/1.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/2.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="/3.jpeg" />
                </SwiperSlide>

            </Swiper>


        </>
    );
}
