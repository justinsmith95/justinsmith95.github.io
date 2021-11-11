import React from 'react'
import { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"
import ProjectCard from "./ProjectCard"


export default function Projects(props) {


    let projectArrayData = [
        {
            projectName: "React Restaurant",
            projectText: "Restaurant menu (randomized) with API Call",
            img: "img/React Restaurant.jpg",
            link: "https://github.com/justinsmith95/restaurant-project"
        },
        {
            projectName: "Fishing Hooks",
            projectText: "API user creation and authentication for a Fishing Store",
            img: "img/Fishing Hooks.jpg",
            link: "https://github.com/justinsmith95/fishing-hooks"
        },
        {
            projectName: "To-Do List",
            projectText: "CRUD functions with a To-Do List made with React",
            img: "img/To-Do List.png",
            link: "https://github.com/justinsmith95/to-do-list"
        },
        {
            projectName: "SQL Heroes",
            projectText: "PHP database CRUD functions with superhero facebook-like site",
            img: "img/SQLHeroes.jpg",
            link: "https://github.com/justinsmith95/SQLHeroes"
        },
        {
            projectName: "Weather-App",
            projectText: "API calling to display pertinent weather info in vanilla Javascript",
            img: "img/Weather App.jpg",
            link: "https://github.com/justinsmith95/Weather-App"
        },
    ]




    return (


        <Container>
            
            <Row>

            {projectArrayData.map((project, index) => {
                return (
                    <ProjectCard
                    cardTitle={project.projectName}
                    cardText={project.textForProject}
                    image={project.img}
                    />
                    )
                })
            }
            </Row>

        </Container>
    )
}