import {useState, useEffect, useRef} from 'react'

import Container from "./Container"

const Banner = () => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = ["Фронтенд разработчик"]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting)
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section className="bg-[url('/images/banner-bg.png')] bg-cover bg-no-repeat bg-top-center p-fl h-screen"
                 id='home'>
            <Container>
                <div className="flex justify-between items-center h-[365px]">
                    <div ref={ref} className={isVisible ? "fadeIn max-w-[650px]" : "max-w-[650px]"}>
                        <span
                            className="font-bold bg-gradient-to-r from-pink-600/[.5] via-purple-600/[.5] to-indigo-700/[.5] bg-opacity-50 inline-block mb-4 p-2.5 tracking-wide border-2 border-white border-opacity-50">Добро пожаловать на мое портфолио</span>
                        <h1 className="text-[50px] tracking-wide mb-5 block font-bold txt-rotate">{`Привет! я Анатолий, `}
                            <span className="inline-block text-center"
                                  data-period="1000"
                                  data-rotate='["Фронтенд разработчик"]'>
                                <span className="inline-block wrap">{text}</span>
                            </span>
                        </h1>
                        <p className="text-gray-400 text-4 w-10/12">Фронтенд-разработкой занимаюсь примерно 2 года.
                            1.2 года работал в крупной компании.
                            Это мое портфолио и оно включает в себя мои навыки и проекты, а так же предоставляет
                            возможность написать мне на почту.
                            Спасибо за уделенное время!</p>
                        <div className="text-4 flex items-center mt-14">Давайте пообщаемся! <img
                            className="ml-3 w-[35px] h-[35px]" src='/images/arrow-right.png' alt="arrow"/> <i
                            aria-hidden="true"></i></div>
                    </div>

                    <div className={isVisible ? "zoomIn" : ""}>
                        <img className="animate-updown w-[512px]" src='/images/octopus.png' alt="banner Img"/>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default Banner