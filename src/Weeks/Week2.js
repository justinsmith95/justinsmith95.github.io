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
                Week 2
      </Button>
            <Collapse in={open}>
                <div className="Week1">
                    <Row md={12} xs={12} xl={12} lg={12} >
                        <Column md={4} xs={4} xl={4} lg={4}>
                            <Image fluid src="img/Week2.jpg"  alt="..." />
                        </Column>
                        <Column md={8} xs={8} xl={8} lg={8}>
                          This week I've been learning a lot about HTML and CSS, their purposes and how they interact with
                    each other. The project this week, specifically, has been very fulfilling in that I feel I can
                    actually create a page and make meaningful changes to it, and be able to see those changes take
                    effect. I'm excited to learn more ways to change and add different objects and elements through
                    html, css, and js as well.
                    I wish I were able to read the code that we've been exposed to already (as well as code we haven't)
                    much more efectively and quickly. Right now even with html, looking at a page of code feels pretty
                    foreign and I have a hard time understanding what each line or tool's purpose is in the code, but I
                    think this skill will improve with practice.
                    I'm currently still struggling a bit with github, in that I still feel quite unfamiliar with the
                    commands and terminology. I think that these weekly blog posts will help in this, however, as I'll
                    have at least a once weekly refresher/review on github when working on the blog posts.
                    Right now when I'm trying to solve a problem(something not working as intended), my first step is to
                    start at the beginning and try to look over each piece for what is needed and what I've input so far
                    for any glaring mistakes (sometimes my typing mistakes I have a hard time catching). Then I'll try
                    to form a clear statement of what task I'm currently trying to accomplish, so I know I have an idea
                    of what to look for in a solution. I'm typically quick to google search any misunderstanding or
                    immediate questions that may arise when I encounter a problem.
                    If I'm not able to search up a solution, I like to take a break and try and come back to the problem
                    with (hopefully) a fresh view and ideally notice something I was missing by tunnel vision earlier.
                        </Column>
                    </Row>
                </div>
            </Collapse>
        </>
    );
}