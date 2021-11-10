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
                Week 11
      </Button>
            <Collapse in={open}>
                <div className="Week1">
                        <Column md={8} xs={8} xl={8} lg={8}>
                          Missed a lot of time due to illness and feeling a bit behind. Struggling somewhat with javascript
                    but slowly learning. Feels like I'm understanding Github moreso than before. I'm curious to see what
                    level of overlap there is between the functions of HTML, CSS, and javascript. How many tasks will be
                    unique to only one of these? As for pseudocoding, I'm interested in the concept. It reminds me of
                    rough drafting for essays. I'm typically not very good at executing a full draft phase before
                    starting work, and sometimes this probably leads to mistakes that could have been avoided with more
                    pre-planning; so I'm hoping I can hone pseudocoding as a useful skill.
                        </Column>
                    <Row md={12} xs={12} xl={12} lg={12} >
                        <Column md={4} xs={4} xl={4} lg={4}>
                            <Image fluid src="img/Spirit gun (2).jpg"  alt="..." />
                        </Column>
                    </Row>
                </div>
            </Collapse>
        </>
    );
}