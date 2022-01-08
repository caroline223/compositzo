import React from 'react'
import NavBar from '../NavBar'
import SignUpGrid from '../SignUpGrid'
import Footer from '../Footer'

import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'



function ThreeYear(){


    return(
        <div>
            <NavBar />
            <div>
                <img src={HeaderImage} className="titleImage" alt="Header"  />
                <div className="title" >
                    Three-Year Journal
                    <br />
                    <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-danger" href="/signup" >Create Your First Journal</a></p>
                </div>
            </div>
            <br />
        <nav aria-label="breadcrumb"  >
                <ol class="breadcrumb justify-content-center" >
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                    <li class="breadcrumb-item"><a href="/introduction">What is a Journal?</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Three Year Journal</li>
                </ol>
        </nav>  

        <h1>What is a Three Year Journal?</h1>

        <p>
            Rather than just a random collection of thoughts or notes, having a journal allows you to record the important people
            and events that matter the most to you. A good--and useful--three year journal allows you to do the following:
            <ul>
                <li><span style={{fontWeight: 'bold'}}>Document the things that matter the most to you.</span> An effective journal is one that captures the important people 
                    and images in your life while outlining the things you wish to accomplish later in life. 
                </li>
                <li><span style={{fontWeight: 'bold'}}>Keep a photgraphic record of yourself and those around you who matter.</span> An effective journal is one that captures the important people 
                    and images in your life while outlining the things you wish to accomplish later in life. 
                </li>
                <li><span style={{fontWeight: 'bold'}}>Understand your goals.</span> Isn't that the point of having a three year journal?
                Tracking not only where you are at, but outlining where you want to go?
                </li>
            </ul>
        </p>

        <h1>Use these <a href="/introduction">writing prompts</a> to help you:</h1>
        <p>
            <ol>
                <li>What do you really need to become a happier person and make life more enjoyable?</li>
                <li>What are some of your short-term and long-term financial goals?</li>
                <li>What are some good habits that you would like to start?</li>
                <li>What are some ways you would like to improve your health?</li>
                <li>Is there any new skill/hobby that you would like to learn?</li>
                <li>Are you able to break down large goals into smaller bits?</li>
            </ol>
        </p>
        <p>
            Approach these topics with an honest conversation with yourself. It is very important to choose goals
            that you are passionate about because you will need alot of enthusiasm to staying focused in order to turn 
            your goals into reality. 
        </p>

        <h1>Benefits of a Compositzo Joural</h1>
        <ul>
            <li><span style={{fontWeight: 'bold'}}>Keep your information private.</span> Compositzo's ensures that your most initimate thoughts stay private 
            through proper authentication protocols.
            </li>
            <li><span style={{fontWeight: 'bold'}}>Access anytime.</span> You are able to access your information anywhere at anytime. </li>
        </ul>

        <br /><br />
        <SignUpGrid />

        <br /> <br /> <br /> <br />
        
        <Footer /> 
        
        </div>
    )


}
export default ThreeYear