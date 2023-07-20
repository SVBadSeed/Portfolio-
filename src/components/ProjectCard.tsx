import React from "react"

import type {ProjectCardProps} from "../types/Project"

import '../styles/global.css'

const ProjectCard = (props: ProjectCardProps) => {

    return (
        <div className="text-center w-full h-56 basis-[32%] max-lg:max-w-[350px]" key={props.id}>
            <a href={`/project/${props.id}`}
               className="proj-link bg-transparent pt-4 pb-4 text-base relative ease-in-out text-center z-0 w-full rounded-[50px] h-56">
                <div className="proj-imgbx h-56">
                    <img className="h-full" src={props.image} alt="/"/>
                    <div className="proj-txtx">
                        <h4>{props.title}</h4>
                        <span>{props.text}</span>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard