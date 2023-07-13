import React from "react"

import { useState, useEffect } from 'react'

import Container from "./Container";

const Header = () => {
    const [activeLink, setActiveLink] = useState('');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <header className={scrolled ? 'px-0 py-24 fixed w-full top-0 transition 0.32s ease-in-out scroll z-10 bg-[#121212]' : 'px-0 py-24 fixed w-full top-0 transition 0.32s ease-in-out z-10'}>
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className="text-xl">ПОРТФОЛИО</h1>
                    <nav className="flex">
                        <ul className="flex justify-between gap-8 items-center mr-8">
                            <li><a className={activeLink === 'home' ? 'opacity-100' : 'opacity-70'} onClick={() => setActiveLink('home')} href="/#home">Главная</a></li>
                            <li><a className={activeLink === 'skills' ? 'opacity-100' : 'opacity-70'} onClick={() => setActiveLink('skills')} href="/#skills">Навыки</a></li>
                            <li><a className={activeLink === 'projects' ? 'opacity-100' : 'opacity-70'} onClick={() => setActiveLink('projects')} href="/#projects">Проекты</a></li>
                        </ul>
                        <ul className="flex items-center gap-2">
                            <li>
                                <a href="https://vk.com/freeshinobi148888">
                                    <img className="rounded-full" src="/images/nav-icon1.svg" alt="vk" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/Masthead1">
                                    <img className="rounded-full" src="/images/nav-icon2.svg" alt="telegram" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SVBadSeed">
                                    <img className="rounded-full" src="/images/nav-icon3.svg" alt="github" />
                                </a>
                            </li>
                        </ul>
                        <a className='px-2 py-2 ml-8 border-solid border-2 border-white' href="/#connect">Давайте свяжемся</a>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header