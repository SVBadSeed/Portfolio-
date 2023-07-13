import React from 'react'

import { useState, useEffect } from 'react'

import Container from "./Container"



const Banner = () => {

    return (
        <section className="bg-[url('/images/banner-bg.png')] bg-cover bg-no-repeat bg-top-center p-fl h-screen" id='home'>
            <Container>
                <div className="flex justify-between items-center">
                  
                            <div className= "fadeIn max-w-[650px]">
                                <span className="font-bold bg-gradient-to-r from-pink-600/[.5] via-purple-600/[.5] to-indigo-700/[.5] bg-opacity-50 inline-block mb-4 p-2.5 tracking-wide border-2 border-white border-opacity-50">Добро пожаловать на мое портфолио</span>
                                <h1 className="text-[50px] tracking-wide mb-5 block font-bold txt-rotate">{`Привет! я Анатолий, `}
                                    <span className="inline-block text-center"
                                        data-period="1000"
                                        data-rotate='["Фронтенд разработчик"]'>
                                        <span className="inline-block wrap"></span>
                                    </span>
                                </h1>
                                <p className="text-gray-400 text-4 w-10/12">Фронтенд-разработкой занимаюсь примерно 2 года.
                                    1.2 года работал фрилансером, успел попробать для себя как обычную верстку, так и разработку интерактива.
                                    Это мое портфолио и оно включает в себя мои навыки и проекты, а так же предоставляет возможность написать мне на почту.
                                    Спасибо за уделенное время!</p>
                                <button className="text-4 flex items-center mt-14" >Давайте пообщаемся! <img className="ml-3 w-[35px] h-[35px]" src='/images/arrow-right.png' alt="arrow" /> <i aria-hidden="true"></i></button>
                            </div>
                  
                      
                            <div className= "zoomIn" >
                                <img className="animate-updown w-[512px]" src='/images/skara.webp' alt="banner Img" />
                            </div>
                  
                </div>
            </Container>
        </section>
    )
}

export default Banner