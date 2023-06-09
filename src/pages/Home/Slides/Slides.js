import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation"

const Slides = () => {
    return (
        <section className="slider">

            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                autoplay={{
                    delay: 500
                }}
                speed={2000}
                modules={[Navigation]}
                className="sliderSwiper"
            >
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://assets-global.website-files.com/5ad4b5ac3265e94b4f4625ea/6179a579f91da881be2c758b_morning-brew-ShVipPImS6k-unsplash_5c8728bacb20daf02414ecbdf89e0418_2000.png" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://blog.dolado.com.br/wp-content/uploads/2022/02/como-vender-em-marketplaces.png" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://thumbs.dfs.ivi.ru/storage37/contents/5/e/a797cd0fc366b4398a858d889e8ac1.jpg/1216x370/?q=60" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="	https://thumbs.dfs.ivi.ru/storage5/contents/3/5/7a52809d0ae6fa6fafdf6d6d15223b.png/1216x370/?q=60" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Slides;