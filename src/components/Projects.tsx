import {useState} from 'react'

import Container from "./Container"
import ProjectCard from './ProjectCard'

import '../styles/global.css'

import {projects} from '../data/projectsArr'

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'

const Projects = () => {
    const [isActive, setIsActive] = useState(0)
    const numberOfPages = Math.ceil(projects.length / 6)

    return (
        <section className="relative pt-20 pb-20 bg-black" id='projects'>
            <Container>
                <div>
                    <h2 className="text-5xl text-bold text-center max-md:text-[40px]">Проекты</h2>
                    <p className="text-gray-300 text-lg ml-auto mr-auto mt-3.5 mb-8 text-center w-4/6 max-md:text-base">Тут
                        находятся все мои проекты, которые я когда-либо делал. На них можно переходить и ознакамливаться
                        с ними более подробно.</p>
                    <div
                        className=" ml-auto mr-auto mt-0 mb-0 flex justify-center bg-color-[rgb(255 255 255 / 10%)] rounded-[50px]">
                        <Tabs>
                            <div className="shadow3 w-4/5 ml-auto mr-auto max-phone:max-w-[200px]">
                                <TabList
                                    className="proj-tab bg-white bg-opacity-10 w-full ml-auto mr-auto mb-5 rounded-[50px] flex  max-lg:max-w-[600px] max-md:max-w-[400px] max-phone:max-w-[200px]">
                                    {Array.from({length: numberOfPages}).map((_, index) => (
                                        <Tab onClick={() => setIsActive(index)} className="proj-item" key={index}>
                                            <a className={isActive === index ? "proj-link active max-w-[475px] shadow2" : ""}>Страница {index + 1}</a>
                                        </Tab>
                                    ))}
                                </TabList>
                            </div>
                            {[0, 6].map((startIndex) => (
                                <TabPanel key={startIndex}
                                          className="grid gap-4 grid-cols-3 grid-rows-2 max-lg:grid-cols-2 max-lg:grid-rows-3 max-md:grid-cols-1 max-md:justify-items-center">
                                    {projects.slice(startIndex, startIndex + 6).map((item: any) => (
                                        <ProjectCard key={item.id} {...item} />
                                    ))}
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Projects