import React from 'react'


function LogoutPage() {

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
            

        <div className="accountImage">
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /><br />
            <h2  style={{textAlign: 'center', color: 'gray', fontWeight: 'bolder'}}>You have successfully logged out.</h2>
            <br /><br /><br />
            <p style={{textAlign: 'center', fontFamily: 'cursive', opacity: '0.7'}}><a className="btn btn-lg btn-danger" href="/" >Home</a></p>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br />
        </div>
        </div>
      
    )


}
export default LogoutPage