import React from 'react'

function NavBar(){

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><h2 style={{color: 'red'}}>Compositzo</h2></a>
                <div style={{textAlign: 'right'}}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/login" style={{color: 'red'}}>Login </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/signup" style={{color: 'red'}}>Signup</a>
                        </li>
                        </ul>
                   </div>
                   </div>
                </div>
            </nav>
        </div>
    )

}
export default NavBar;