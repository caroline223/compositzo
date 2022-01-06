import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'

import SignUpGrid from '../SignUpGrid'
import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'



function AboutPage() {

    return(
        <div>
            <NavBar />

            <div>
            <img src={HeaderImage} className="titleImage" alt="Header" height="400" width="100%" />
            <div className="title" >
                About Us
                <br />
                <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-danger" href="/signup" >Create Your First Journal</a></p>
            </div>
       </div>

         <nav aria-label="breadcrumb"  >
                <ol class="breadcrumb" >
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
        </nav> 

        <br />
            <h1>Who Are We?</h1>

           <p>
               We beleive that life's most important momemnts are worth documenting. From getting your driver's license to purchasing your first home, 
               we beleive that documenting these events are not only important, but something worth cherishing for many years to come. 
               <span style={{color: "red", fontFamily: 'cursive'}}> Compositzo</span> is an app that allows one to document all of their life's major milestones with the intention of looking back to it in future reference, as well as
               share these life stories with their significant others (i.e. spouses, children, etc.). We all know that the human mind is falliable, and as we get older, we may not remember every single important 
               detail from an event that we cherish the most. We provide you with all of the tools necessary to cultivate the ideas you wish to 
               preserve in your writing, rather than focusing on the writing process itself. 
           </p>

            <br /> <br />
           <SignUpGrid />
           <br /> <br /> <br /> <br />
           
            <Footer /> 

        </div>
    )

}

export default AboutPage