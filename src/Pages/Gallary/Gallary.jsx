import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



const Gallary = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-5xl text-center font-bold mb-5'>Photo Galleries</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                // centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/hercules-hall-surrounded-by-greenery-sunlight-daytime-munich-germany_181624-17876.jpg?size=626&ext=jpg&ga=GA1.2.1935858399.1683099883&semt=sph" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg?size=626&ext=jpg&ga=GA1.2.1935858399.1683099883&semt=sph" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/group-diverse-grads-throwing-caps-up-sky_53876-56031.jpg?size=626&ext=jpg&ga=GA1.2.1935858399.1683099883&semt=sph" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/ottawa-parliament-hill-building_649448-3606.jpg?size=626&ext=jpg&uid=R71766098&ga=GA1.2.1935858399.1683099883&semt=ais" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-photo/medium-shot-smiley-graduate-student_23-2148950576.jpg?size=626&ext=jpg&uid=R71766098&ga=GA1.2.1935858399.1683099883&semt=sph" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/13616415/pexels-photo-13616415.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Gallary;