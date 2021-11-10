import React from 'react'
import { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Container,
    Row,
    Col as Column,
    Image
} from "react-bootstrap"
import {useHistory} from "react-router-dom"
import Week1 from './Weeks/Week1.js'
import Week2 from './Weeks/Week2.js'
import Week3 from './Weeks/Week3.js'
import Week4 from './Weeks/Week4.js'
import Week5 from './Weeks/Week5.js'
import Week6 from './Weeks/Week6.js'
import Week7 from './Weeks/Week7.js'
import Week8 from './Weeks/Week8.js'
import Week9 from './Weeks/Week9.js'
import Week10 from './Weeks/Week10.js'
import Week11 from './Weeks/Week11.js'
import Week12 from './Weeks/Week12.js'



export default function Blog() {
    
    
    
    
    
    
    return(
        <Container fluid>
            <Row>
             <Week1/>
            </Row>
            <Row>
             <Week2/>
            </Row>
            <Row>
             <Week3/>
            </Row>
            <Row>
             <Week4/>
            </Row>
             <Row>
             <Week5/>
            </Row>
            <Row>
             <Week6/>
            </Row>
            <Row>
             <Week7/>
            </Row>
            <Row>
             <Week8/>
            </Row>
            <Row>
             <Week9/>
            </Row>
             <Row>
             <Week10/>
            </Row>
             <Row>
             <Week11/>
            </Row>
             <Row>
             <Week12/>
            </Row>





        </Container>





        )
}