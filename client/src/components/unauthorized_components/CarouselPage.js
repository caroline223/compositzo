import React from 'react'
import { Carousel } from 'react-bootstrap'
import HomeImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-lisa-1006293.jpg'
import HomeImage2 from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-los-muertos-crew-7260642.jpg'
import HomeImage3 from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-jessica-lewis-creative-583848.jpg'
function CarouselPage(){

    return(
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={HomeImage}
                    alt="First slide"
                    />
                    <Carousel.Caption style={{bottom: '250px'}}>
                        <h1 style={{color: 'red', fontSize: '70px'}}>Compositzo</h1>
                        <p style={{color: 'red', textAlign: 'center', fontSize: '30px', fontFamily: 'cursive'}}>The World's Most Famous Journaling App!</p>
                        <p style={{textAlign: 'center', fontFamily: 'cursive'}}><a className="btn btn-lg btn-danger" href="/signup" >Join Today</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img
                    className="d-block w-100"
                    src={HomeImage2}
                    alt="Second slide"
                    />
                    <Carousel.Caption style={{bottom: '250px'}}>
                        <h1 style={{color: 'red', fontSize: '70px'}}>Compositzo</h1>
                        <p style={{color: 'red', textAlign: 'center', fontSize: '30px', fontFamily: 'cursive'}}>The Most Private Intimate Experience You'll Ever Have!</p>
                        <p style={{textAlign: 'center', fontFamily: 'cursive'}}><a className="btn btn-lg btn-danger" href="/signup" >Join Today</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={HomeImage3}
                    alt="Third slide"
                    />

                    <Carousel.Caption style={{bottom: '250px'}}>
                        <h1 style={{color: 'red', fontSize: '70px'}}>Compositzo</h1>
                        <p style={{color: 'red', textAlign: 'center', fontSize: '30px', fontFamily: 'cursive'}}>Beneficial for users of all ages! Give It A Try!</p>
                        <p style={{textAlign: 'center', fontFamily: 'cursive'}}><a className="btn btn-lg btn-danger" href="/signup" >Join Today</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

}
export default CarouselPage