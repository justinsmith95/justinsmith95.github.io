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
                Week 9
      </Button>
            <Collapse in={open}>
                <div className="Week1">
                    <Row md={12} xs={12} xl={12} lg={12} >
                    <Column md={8} xs={8} xl={8} lg={8}>
                        A CLI  allows us to give commands that would (without it) probably require a lot more time, effort, and typing.
                        I don't think I have much of an idea of what all CLIs are capable of, so in that way they can be a bit scary.
                        If I were to build a CLI, I would use it to make typing typical commands we use every day shorter and easier to use repeatedly.
                        Most notably the git add, commit and push; and more recently the yarn build and firebase deploy, into single word commands. 
                        I'm sure there is much more complex action that can be built into a CLI, however. Without  a framework (React in this case) since I've been using hooks, I can see how using classes takes more code and therefore time to create. 
                        The snippets also allow for faster coding.
                        </Column>
                        <Column md={4} xs={4} xl={4} lg={4}>
                            <Image fluid src="img/Week9.png" alt="..." />
                        </Column>
                    </Row>
                </div>
            </Collapse>
        </>
    );
}