import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Card,
} from "react-bootstrap"



export default function ProjectCard(props) {





    return(
        <Col className="col-4">

        <Card style={{ width: '18rem'}}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.cardTitle}</Card.Title>
    <Card.Text>
      {props.Text}
    </Card.Text>
    <Card.Text>
      {props.link}
    </Card.Text>
    <Button variant="secondary">Github</Button>
  </Card.Body>
</Card>
        </Col>
        );
}