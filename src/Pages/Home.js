import React, {Component} from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Card, Container, CardDeck, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <>
            <CarouselBox />
            <Container>
                <h2 className="text-center m-4">Our Flowers</h2>
                <CardDeck>
                    <Card>
                        <Card.Img 
                        variant="top"
                        src="https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        />
                        <Card.Body>
                            <Card.Title>Special Offer</Card.Title>
                            <Card.Text>lorem ipsumml smms smsmsm smsmsm smsms msmsms
                            </Card.Text>
                            <Button variant="primary">More...</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img 
                        variant="top"
                        src="https://images.pexels.com/photos/4622976/pexels-photo-4622976.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        />
                        <Card.Body>
                            <Card.Title>Special Offer</Card.Title>
                            <Card.Text>lorem ipsumml smms smsmsm smsmsm smsms msmsms
                            </Card.Text>
                            <Button variant="primary">More...</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img 
                        variant="top"
                        src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                        />
                        <Card.Body>
                            <Card.Title>Special Offer</Card.Title>
                            <Card.Text>lorem ipsumml smms smsmsm smsmsm smsms msmsms
                            </Card.Text>
                            <Button variant="primary">More...</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
            </>
        )
    }
}