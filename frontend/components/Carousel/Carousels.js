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
                {images.map((data) => {
                    return (
                        <SwiperSlide key={data.id}>

                            <img className='h-[300px] md:h-[400px] rounded-2xl md:rounded-none' src={data.Image} alt="gallery image"
                            />
                        </SwiperSlide>
                    )

                })}
            </Swiper>
        </>
    );
}










