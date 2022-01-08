import React from 'react'

function Footer(){

    return(
        <div>
            <div  style={{backgroundColor: 'black'}}>
            <footer className="row row-cols-5 py-5 my-6 border-top">
                 <div className="col" style={{fontFamily: 'fantasy'}}>
                <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                </a>
                <p className="text-muted">Caroline Forrester © 2021</p>
                <p className="text-muted">Credits: Penzu.com</p>
                </div>

                <div className="col">

                </div>

            <div className="col">
            <h5 style={{color: 'white'}}>Compositzo</h5>
            <ul className="nav flex-column" >
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                <li className="nav-item mb-2"><a href="/signup" className="nav-link p-0 text-muted">Free Signup</a></li>
                <li className="nav-item mb-2"><a href="/login" className="nav-link p-0 text-muted">Login</a></li>
            </ul>
            </div>

            <div className="col">
            <h5 style={{color: 'white'}}>Journals</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/introduction" className="nav-link p-0 text-muted">What is a Journal?</a></li>
                <li className="nav-item mb-2"><a href="/journal-prompts" className="nav-link p-0 text-muted">Journal Prompts</a></li>
                <li className="nav-item mb-2"><a href="/journal-examples" className="nav-link p-0 text-muted">Journal Examples</a></li>
                <li className="nav-item mb-2"><a href="/three-year-journal" className="nav-link p-0 text-muted">Three Year Journal</a></li>
                <li className="nav-item mb-2"><a href="/pregnancy-journal" className="nav-link p-0 text-muted">Pregnancy Journal</a></li>
                <li className="nav-item mb-2"><a href="/travel-journal" className="nav-link p-0 text-muted">Travel Journal</a></li>
            </ul>
            </div>

            <div className="col">
            <h5 style={{color: 'white'}}>About</h5>
            <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contact Us</a></li>
            </ul>
            </div>
        </footer>
</div>
           
        </div>
    )




}
export default Footer;