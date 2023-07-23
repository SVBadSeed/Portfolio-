import Container from "./Container"

import '../styles/global.css'

import {skills} from "../data/skillsArr"

import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation} from 'swiper/modules'

const Skills = () => {

    return (
        <section className="pb-12 relative mt-m140 max-lg:mt-[40px]" id="skills">
            <Container>
                <div>
                    <div className="shadow">
                        <div className="bg-dark rounded-64 text-center py-14 px-14">
                            <h2 className="text-5xl font-bold max-md:text-[40px]">Навыки</h2>
                            <p className="text-gray-400 text-4 mt-3.5 mb-16 max-md:text-base max-phone:mb-4">Тут
                                отображаются все
                                навыки, освоенные мной.<br>
                                </br>Другие технологии по типу 'git' не включены в этот список.</p>
                            <Swiper className="h-64"
                                    speed={700}
                                    modules={[Navigation]}
                                    navigation={true}
                                    breakpoints={{
                                        1024: {
                                            slidesPerView: 3,
                                        }, 768: {
                                            slidesPerView: 2,
                                        }, 500: {
                                            slidesPerView: 1,

                                        }, 300: {
                                            slidesPerView: 1,

                                        }, 100: {
                                            slidesPerView: 1,
                                        },
                                    }}>
                                {skills.map((skill, i) => (
                                    <SwiperSlide key={i}>
                                        <div
                                            className="circle-container relative flex justify-center items-center mb-6">
                                            <img className="z-10 absolute w-100 max-phone:w-[50px] max-phone:h-[50px]"
                                                 src={skill.image} alt="/"/>
                                        </div>
                                        <div className=" block z-20 absolute bottom-0 w-full text-xl">
                                            <div className="text-center">{skill.title}</div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </Container>
            <img className="absolute top-1/4 z-m4 w-2/5 bottom-0" src='/images/color-sharp.png' alt="/"/>
        </section>
    )
}

export default Skills