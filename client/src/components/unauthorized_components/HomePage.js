import React from 'react'
import Footer from '../Footer'
import CarouselPage from './CarouselPage'
import SocialMediaAdv from './SocialMediaAdv'

function HomePage() {

    return(
        <div>
          <header>
              <nav className="navbar navbar-expand-md navbar-dark fixed-top" style={{backgroundColor: 'black'}}>
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

     <CarouselPage />

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
      <br /><br />
      <Footer />
  </div>
    )

}

export default HomePage