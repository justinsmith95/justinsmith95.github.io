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
                Week 1
      </Button>
            <Collapse in={open}>
                <div className="Week1">
                    <Row md={12} xs={12} xl={12} lg={12} >
                        <Column md={8} xs={8} xl={8} lg={8}>
                            It was a bit of a struggle to get to this point.
                            The first week I really didn't know what to expect, but I'm glad to be beginning my bootcamp
                            journey.
                            I'm very excited to learn more about github, as it seems like it has a wide variety of tools and
                            uses.
                            I've been enjoying the learning process so far. The image I posted is of Yusuke Urameshi, the main
                            character in a show I like, Yu Yu Hakusho.
                        </Column>
                        <Column md={4} xs={4} xl={4} lg={4}>
                            <Image fluid src="img/Spirit gun (2).jpg"  alt="..." />
                        </Column>
                    </Row>
                </div>
            </Collapse>
        </>
    );
}