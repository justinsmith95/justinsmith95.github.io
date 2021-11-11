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
            img: "image1",
            link: "url"
        },
        {
            projectName: "Fishing Hooks",
            projectText: "API user creation and authentication for a Fishing Store",
            img: "image2",
            link: "url"
        },
        {
            projectName: "To-Do List",
            projectText: "CRUD functions with a To-Do List made with React",
            img: "image2",
            link: "url"
        },
        {
            projectName: "SQL Heroes",
            projectText: "PHP database CRUD functions with superhero facebook-like site",
            img: "image2",
            link: "url"
        },
        {
            projectName: "Weather-App",
            projectText: "API calling to display pertinent weather info in vanilla Javascript",
            img: "image2",
            link: "url"
        },
        {
            projectName: "Tic-Tac-Toe",
            projectText: "Basic Tic-Tac-Toe game generated with vanilla Javascript",
            img: "image2",
            link: "url"
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