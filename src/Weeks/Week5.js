import React from 'react';
import { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col as Column,
    Image,
    Collapse,
} from "react-bootstrap"



export default function Week1(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button
                className="text-center"
                onClick={() => setOpen(!open)}
                aria-controls="Week1"
                aria-expanded={open}
            >
                Week 5
      </Button>
            <Collapse in={open}>
                <div className="Week1">
                    <Row md={12} xs={12} xl={12} lg={12} >
                        <Column md={8} xs={8} xl={8} lg={8}>
                          Very happy to be in person this week! Already a countless number of times I've learned so much just from listening and talking with others in the room and working through problems. 
                          I also really like the warm-up kadas, even though I'm typically struggling with them a bit. 
                          This week has been a huge time commitment, but I am learning so much in that time. 
                          We had 3 projects this week: two involving Bootstrap, so I've become (vaguely) familiar with its uses and can at least have something resembling a web page or app. 
                          I'm not great at design nor do I have much of a passion for it in this sense, so I'll need to really stay focused on bootstrap and try to make the most out of it. 
                          I focused most of my time on the mindreader app project, and I did manage to have it almost completely functional, just had a problem with the last page displaying the symbol I wanted it to. 
                          On one hand, I feel that I have a decent understanding of state as it pertains to objects in javascript, but I'm sure there's a lot more about it I've yet to be exposed to. 
                          I did get a small taste of classes and I think they will have a wide variety of uses as I become more experienced. 
                          It was extremely satisfying to see the work and frustration finally conclude with something that halfway worked, and I'm looking forward to future projects.
                        </Column>
                        <Column md={4} xs={4} xl={4} lg={4}>
                            <Image fluid src="img/Week5.jpg"  alt="..." />
                        </Column>
                    </Row>
                </div>
            </Collapse>
        </>
    );
}