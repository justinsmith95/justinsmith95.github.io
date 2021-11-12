import React from 'react'
import { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Image,
    Collapse,
    Card
} from "react-bootstrap"
import { useHistory } from "react-router-dom"



export default function Contact() {

    const [open, setOpen] = useState(false);



    return (
        <Container>
            <Row className="mt-5">
                <Col className="col-3"></Col>
                <Col className="col-6">
                    <Image src="img/License.jpeg" className="h-80" fluid roundedCircle />
                </Col>
                <Col className="col-3"></Col>
            </Row>
            <Row className="mt-4">
                <h3 className="text-center">
                    Justin Smith - Full Stack Web Developer
                    </h3>
            </Row>
            <Row className="mt-4">

                <Button
                    className="text-center"
                    onClick={() => setOpen(!open)}
                    aria-controls="AboutMe"
                    aria-expanded={open}
                >About Me
      </Button>
                <Collapse in={open}>
                    <div className="AboutMe">
                        <Row md={12} xs={12} xl={12} lg={12} >
                            <p className="text-center mt-4">
                                Most of my 26 year old life has been spent learning. When I was younger I liked reading and learning new sports and hobbies.
                                I continued these passions throughout high school and into college, where I majored in philosophy (lots of reading and asking "why?"), and eventually through law school, and in 2020 I became an attorney (more reading and pretending to explain "why?").
                                After a little over a year in practice, it was quickly apparent that the career wasn't for me, and I sought something else to learn and make a career out of. Programming always interested me with its concrete problem-solving and constant adaptations/learning new things. I started the Awesome Inc Bootcamp U, and began my programming journey.
                                Other than web-development, my hobbies and interests include spending time with friends, watching way too many movies, playing tennis, playing trivia, and most importantly, video games.
                           </p>
                            <p className="text-center">  Talk to me about your favorite movies or games!</p>
                        </Row>
                    </div>
                </Collapse>
            </Row>
            <Row>
                <Button
                    className="text-center"
                    onClick={() => setOpen(!open)}
                    aria-controls="ContactMe"
                    aria-expanded={open}
                >Contact Me
      </Button>
                <Collapse in={open}>
                    <div className="ContactMe">
                        <Row md={12} xs={12} xl={12} lg={12} >
                            <Col lg="5" className="lg-0 mb-4">
                                <Card>
                                    <Card.Body>
                                        <div className="form-header blue accent-1">
                                            <h3 className="mt-2">
                                                Write to me:
                                                    </h3>
                                        </div>
                                        <div className="md-form">
                                            <Form
                                                label="Your name"
                                                type="text"
                                                id="form-name"
                                            />
                                        </div>
                                        <div className="md-form">
                                            <Form
                                                label="Your email"
                                                type="text"
                                                id="form-email"
                                            />
                                        </div>
                                        <div className="md-form">
                                            <Form

                                                label="Subject"

                                                type="text"
                                                id="form-subject"
                                            />
                                        </div>
                                        <div className="md-form">
                                            <Form


                                                type="textarea"
                                                id="form-text"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <Button color="light-blue">Submit</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </Collapse>
            </Row>
        </Container>

    )
}