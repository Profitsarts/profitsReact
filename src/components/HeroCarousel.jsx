import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const SLIDER_IMAGES = [
    '/assets/img/slider-images/image-10.jpg',
    '/assets/img/slider-images/image-00.jpg',
    '/assets/img/slider-images/image-01.jpg',
    '/assets/img/slider-images/image-09.jpg',
    '/assets/img/slider-images/image-03.jpg',
    '/assets/img/slider-images/image-04.jpg',
    '/assets/img/slider-images/image-08.jpg',
];

const HeroCarousel = () => {
    return (
        <div className="w-full h-[60vh] md:h-[70vh] relative overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={800}
                className="h-full w-full"
            >
                {SLIDER_IMAGES.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${image})` }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroCarousel;
