import React from 'react'
import {Card,Button, Container} from 'react-bootstrap'
import './cards.css'

function Cards() {
  return (
    <Container style={{marginTop:"5rem"}} className="CardsBody">
      <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/bike.jpeg" />
    <Card.Body>
      <Card.Title>R15 V3</Card.Title>
      <Card.Text>
        Some quick example text 
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/bike.jpeg" />
    <Card.Body>
      <Card.Title>R15 V3</Card.Title>
      <Card.Text>
        Some quick example text
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/bike.jpeg" />
    <Card.Body>
      <Card.Title>R15 V3</Card.Title>
      <Card.Text>
        Some quick example 
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/images/bike.jpeg" />
    <Card.Body>
      <Card.Title>R15 V3</Card.Title>
      <Card.Text>
        Some quick example 
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
    </Container>
  )
}

export default Cards
