import React from 'react'
import NavBar from '../NavBar'
import Footer from '../Footer'
import SignUpGrid from '../SignUpGrid'

import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'


function TravelPage(){

    return(
        <div>
            <NavBar />

             <div>
                <img src={HeaderImage} className="titleImage" alt="Header"  />
                <div id="travelTitle" >
                    Travel Journal: Tips and Tricks on a successful journal log
                    <br />
                    <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-danger" href="/signup" >Create Your First Journal</a></p>
                </div>
             </div>
             <br />
             <nav aria-label="breadcrumb"  >
                <ol class="breadcrumb justify-content-center" >
                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                     <li class="breadcrumb-item"><a href="/introduction">What is a Journal?</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Travel Journal</li>
                </ol>
        </nav> 

            <p>
                Traveling allows you to explore new places, meet new people, and uncover new opportunities. The more and farther you travel,
                the further you are pushed outside of your comfort zone. As such, the more unique your experiences become, and the more exciting your
                journaling becomes. 
            </p>
            <p>
                Travel journals by far are one of the most popular types of journals. Having a travel journal allows you to acknolwedge your new experiences
                and the knowledge you obtained from these experiences in one place. 
            </p>

            <h1>What is a Travel Journal?</h1>

            <p>
                Travel journals are journals that allow you to document trips that you took, the experiences you endured, as well as the 
                knowledge you've obtained from these trips. It is an amalgamation of stories, adventures, stories, and memories. 
            </p>

            <h1>Tips to get the most of your journal writing.</h1>

            <h2>Use your journal to plan your trip</h2>
            <p>
                Use your journal to plan things you want to do before doing it. It could be from different sights to see,
                restaurants to try out, hikes to take, etc. Once you know what to do, do some research as to plan on the best way to
                approach it. For actiivites, jot down the contact information of the people, places, or tours that facilitates those actiivites.
            </p>

            <h2>Write about what you would imagine your trip being like</h2>
            <p>
                When traveling, sometimes your expectations of a place may be vastly different from how the place actually is.
                Whatever the case may be, think about writing it before actually writing it down. It would be very interesting to compare your expectations 
                vs. what you actually experienced. 
            </p>

            <h2>Write during your trip</h2>
            <p>
                It is easy to get caught in the moment when going through your actual trip. Rather than losing the intiricate details of your trips 
                to memory, be sure to jot down your experiences as you are going through the trip. Your entries do not have to be long, but rather, allow it to highlight
                what you felt was most important or exciting during the trip. 
            </p>

            <h2>Add pictures to your journal</h2>
            <p>
                As they say, a picture is truly worth a thousand words. Adding pictures to your journal gives life to your entry.
                Adding pictures to your travel journal also provides more visual context when describing your experiences throughout your journey.
            </p>

            <h2>Write about your trip after you leave</h2>
            <p>
                Some questions to include:
                <ul>
                    <li>What was the trip like?</li>
                    <li>What did you learn?</li>
                    <li>What surprised you?</li>
                    <li>What dissappointed you?</li>
                    <li>Is there anything about the trip you would change?</li>
                </ul>
            </p>

            <h1>Inspiration Travel Journal Ideas</h1>

            <p>
                Here are some great travel journal ideas to get your creativity flowing.
                <ol>
                    <li>What is the purpose of your trip?</li>
                    <li>What are your expectations?</li>
                    <li>What are you going to do during your trip?</li>
                    <li>What people did you meet?</li>
                    <li>How's the food?</li>
                    <li>What would you have changed from the trip?</li>
                    <li>Where do you want to travel next?</li>
                </ol>
            </p>

           <br />
           <SignUpGrid />
           <br /><br /><br /><br />

            <Footer />

        </div>
    )




}
export default TravelPage