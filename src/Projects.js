import React from 'react'
import { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Column,
    Carousel,
} from "react-bootstrap"
import { useHistory } from "react-router-dom"





export default function Projects() {






    return (

        <Container>
            <Row height={200}>

                <Carousel height ={200} width={200}>
                    <Carousel.Item>
                        <img height={180}
                            className="d-block w-100"
                            src="img/Spirit gun (2).jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption className="text-center">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={180}
                            className="d-block w-100"
                            src="img/Spirit gun (2).jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption className="text-center">
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height={180}
                            className="d-block w-100"
                            src="img/Spirit gun (2).jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption className="text-center">
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Row>

        "Projects here"




        </Container>
    )
}