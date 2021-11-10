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
                Week 12
      </Button>
            <Collapse in={open}>
                <div className="Week1">
                    <Row md={12} xs={12} xl={12} lg={12} >
                        <Column md={4} xs={4} xl={4} lg={4}>
                            <Image fluid src="img/Spirit gun (2).jpg" alt="..." />
                        </Column>
                        <Column md={8} xs={8} xl={8} lg={8}>
                            Learned a lot of new concepts this week through Grasshopper and reading material. 
                            Pseudocoding is more difficult than I thought, but is really great for working through what you want to occur step-by-step. 
                            I'm looking forward to when we utilize paired programming, as it seems like a really useful tool for being able to learn hands-on, and a partner can provide some insights to misunderstandings or questions I may have, as well as an opportunity to solidify any knowledge (not much there currently!) I may have through teaching moments with another person.
                             Unfortunately, I fell ill with covid this week and was put out of commission for most of the second half, and was unable to work on this week's project. 
                             Its frustrating, but things like this happen, and I want to take it as an opportunity to manage a backlog. 
                             A looming backlog feels stressful initially, so I'm hoping some experience will help me to handle it. 
                             Looking forward to being in-person and having my health improved to really get into some serious learning.
                        </Column>
                    </Row>
                </div>
            </Collapse>
        </>
    );
}