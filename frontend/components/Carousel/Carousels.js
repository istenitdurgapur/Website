import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

// import required modules
import { EffectCoverflow } from "swiper";


export default function Carousels({ images }) {

    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation,EffectCoverflow]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    
                }}
                breakpoints={{

                    1000: {
                        slidesPerView: 2
                        
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }}
                className="mySwiper"
            >
                
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="/DSC07750.webp" alt="gallery image"
                            />                     
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="/DSC07720.webp" alt="gallery image"
                            />       
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="/cit1.png" alt="gallery image"
                            />       
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="gallery3-min.png" alt="gallery image"
                            />       
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="gallery4-min.png" alt="gallery image"
                            />       
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="winter2-min.png" alt="gallery image"
                            />       
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src="gallery home.jpg" alt="gallery image"
                            />       
                        </SwiperSlide>
            </Swiper>
        </>
    );
}










