import {useState, useEffect} from 'react'

import '../styles/global.css'

import Container from "./Container"

const Header = () => {
    const [activeLink, setActiveLink] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [burgerClick, setBurgerClick] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <header
            className={burgerClick || scrolled ? 'px-0 py-4 fixed w-full top-0 scroll z-10 bg-[#121212]' : 'px-0 py-4 fixed w-full top-0 z-10'}>
            <Container>
                <div className="flex justify-between items-center">
                    <a href='/' className="text-xl">ПОРТФОЛИО</a>
                    <input id="menu-toggle" type="checkbox"/>
                    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button' onClick={() => setBurgerClick(!burgerClick)}></div>
                    </label>
                    <nav className={burgerClick ? "flex menu max-md:hidden" : "flex menu max-md:hidden"}>
                        <div
                            className='flex max-md:block max-md:max-w-[500px] max-md:w-full mx-auto max-md:text-right max-phone:max-w-[330px]'>
                            <ul className="flex justify-between gap-8 items-center mr-8 max-md:mr-0 max-md:my-4 max-md:flex-col max-md:gap-0 max-md:justify-end max-md:items-end">
                                <li><a className={activeLink === 'home' ? 'opacity-100' : 'opacity-70'}
                                       onClick={() => setActiveLink('home')} href="/#home">Главная</a></li>
                                <li><a className={activeLink === 'skills' ? 'opacity-100' : 'opacity-70'}
                                       onClick={() => setActiveLink('skills')} href="/#skills">Навыки</a></li>
                                <li><a className={activeLink === 'projects' ? 'opacity-100' : 'opacity-70'}
                                       onClick={() => setActiveLink('projects')} href="/#projects">Проекты</a></li>
                            </ul>
                            <ul className="flex items-center gap-2 max-md:justify-end">
                                <li>
                                    <a href="https://vk.com/freeshinobi148888">
                                        <img className="rounded-full" src="/images/nav-icon1.svg" alt="vk"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://t.me/Masthead1">
                                        <img className="rounded-full" src="/images/nav-icon2.svg" alt="telegram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/SVBadSeed">
                                        <img className="rounded-full" src="/images/nav-icon3.svg" alt="github"/>
                                    </a>
                                </li>
                            </ul>
                            <div
                                className='px-2 py-2 ml-8 border-solid border-2 border-white max-md:my-4 max-md:inline-block'>
                                <a
                                    href="/#connect">Давайте свяжемся</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default Header