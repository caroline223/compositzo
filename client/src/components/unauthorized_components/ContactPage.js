import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'



function ContactPage(){

    return(
        <div>
            <NavBar />

            <div>
                <img src={HeaderImage} className="titleImage" alt="Header" height="400" width="100%" />
                <div className="title" style={{left: '520px'}}>
                    Contact Us
                    <br />
                    <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-danger" href="/signup" >Create Your First Journal</a></p>
                </div>
            </div>
        <br />
         <nav aria-label="breadcrumb"  >
                <ol class="breadcrumb justify-content-center" >
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ol>
            </nav> 
        <br />

        <h1>Follow Us On Our Social Media Platforms!</h1>
        <table class="table table-striped" style={{padding: '20px'}}>
            <tbody style={{textAlign: 'center'}}>
                <tr>
                    <td><FontAwesomeIcon icon={faInstagram} color='purple' size=''/>&nbsp;Instagram</td>
                    <td>@Compositzo</td>
                </tr>
                <tr>
                    <td><FontAwesomeIcon icon={faFacebookSquare} color='blue'/>&nbsp; Facebook</td>
                    <td>@Compositzo</td> 
                </tr>
                <tr>
                    <td><FontAwesomeIcon icon={faTwitter} color='blue' />&nbsp;Twitter</td>
                    <td>@Compositzo</td>
                </tr>
            </tbody>
        </table>
        <br />
       
            <Footer />     
        </div>
    )



}
export default ContactPage;