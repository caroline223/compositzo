import React from 'react'
import Footer from '../Footer'
import SocialMediaAdv from './SocialMediaAdv'

import HomeImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-lisa-1006293.jpg'
import HomeImage2 from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-los-muertos-crew-7260642.jpg'

function HomePage() {

  
    return(
        <div>
          <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                   <a className="navbar-brand" href="/"><h2>Compositzo</h2></a>
                     <div style={{textAlign: 'right'}}>
                         <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                              <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/login">Login</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="/signup">Signup</a>
                              </li>  
                            </ul>
                          </div>
                     </div> 
                  </div>
              </nav>
        </header>

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
       <img  src={HomeImage} width="100%" height="100%" alt="Home" />

        <div className="container">
          <div className="carousel-caption text-start" style={{bottom: '250px'}}>
            <h1 style={{color: 'red', fontSize: '70px'}}>Compositzo</h1>
            <p style={{color: 'red', textAlign: 'center', fontSize: '30px', fontFamily: 'cursive'}}>The World's Most Famous Journaling App!</p>
            <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-danger" href="/signup" >Join Today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <img  src={HomeImage2} width="100%" height="100%" alt="Home"/>

        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>


  

  <div className="container marketing">
  <hr className="featurette-divider" />

      <SocialMediaAdv />

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading">What's your purpose for writing?</h2>
        <p className="lead">
        Whether you want to track your daily activites, record your achievements, take notes of your dreams,
              or jot down aspiring thoughts and inspirations, we have all of the tools you need to record your thoughts.
        </p>
      </div>
      <div className="col-md-5 order-md-1">
        <img src ="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8am91cm5hbHxlbnwwfHwwfHw%3D&w=1000&q=80"  width="300" height="300" alt="Journal"/>
      </div>
    </div>

    <hr className="featurette-divider" />

    <div className="row featurette">
      <div className="col-md-7">
        <h2 className="featurette-heading">We value your privacy</h2>
        <p className="lead">
        We believe that journaling represents an intimate moment one is having with themselves with regards to their thoughts,
              feelings, emotions, and/or actions. Furthermore, without protection, anyone can gain access to anyone's personal journals/diaries.
              Therefore, we provide authentication to ensure that the right person views their respective content at any given time.
        </p>
      </div>
      <div className="col-md-5 " style={{textAlign: 'right'}}>
          <img src ="https://st.depositphotos.com/1571889/1823/i/600/depositphotos_18235681-stock-photo-login-screen.jpg"  width="300" height="300" alt="Login"/>
      </div>
    </div>

   
  </div>   
      <Footer />
  </div>
    )

}

export default HomePage