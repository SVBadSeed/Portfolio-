import Container from "./Container"

import '../styles/global.css'

const AboutProject = ({ prod }: any) => {
    const sentences = prod.desc.split('. ')

    return (
        <>
            <div className="flex justify-center items-center w-full min-h-screen absolute overflow-hidden -z-10">
                {new Array(1, 2, 3, 4, 5, 6, 7, 8).map((_) => (
                    <div key={_} className="glowing">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                ))}
            </div>
            <Container>
                <h1 className="text-gradient text-5xl font-bold text-center uppercase">
                    {prod.title}
                </h1>

                <div className="flex justify-between">
                    <div className="w-[450px]">
                        <h2 className="rotate-border p-4 mb-6">
                            <span className="z-10 text-base">Немного от себя:</span>
                        </h2>
                        <div className="mb-6">
                            {sentences.map((sentence: string, index: number) => (
                                <p key={index}>{sentence.trim()}. </p>
                            ))}
                        </div>
                        <h2 className="rotate-border rotate-border2 p-4 mb-6">
                            <span className="z-10 text-base">Стек проекта:</span>
                        </h2>
                        <ul className="list-disc ml-4">
                            {prod.stack.map((item: string, i: number) => (
                                <li key={i}>{item}</li>
                            ))}

                        </ul>
                    </div>
                    <a href={prod.url} className="cursor-pointer h-[350px]">
                     

                            <img className="w-[700px] h-full" src={prod.image} alt="" />
                            <div className="text-center mt-4"> При клике на картинку можно посмотреть деплой проекта.</div>
                      
                    </a>
                </div>
                <img className="absolute left-0 top-0 -z-10 min-h-full min-w-full w-full h-full" src='/images/color-sharp.png' alt="" />
            </Container>
        </>
    )
}

export default AboutProject