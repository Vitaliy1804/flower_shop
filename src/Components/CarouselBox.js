import React, {Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import fl1 from '../assets/fl1.jpg'
import fl2 from '../assets/fl2.jpg'
import fl3 from '../assets/fl3.jpg'


export default class CarouselBox extends Component {
    render() {
        return (
            
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-inline-block w-100"
                    src={fl1}
                    alt="Flower"
                    />
                    <Carousel.Caption>
                        <h3>Flower One</h3>
                        <p>Lorem ipsum dolor</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={fl2}
                    alt="Flower"
                    />
                    <Carousel.Caption>
                        <h3>Flower Two</h3>
                        <p>Lorem ipsum dolor amet</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-300px"
                    src={fl3}
                    alt="Flower"
                    />
                    <Carousel.Caption>
                        <h3>Flower Three</h3>
                        <p>Lorem ipsum dolor</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}