import React from 'react'
import NavBar from '../NavBar'
import SignUpGrid from '../SignUpGrid'
import Footer from '../Footer'
import { Button, Image } from 'semantic-ui-react'
import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'


function JournalPrompts(){

    return(
        <div>
            <NavBar />
            <div>
                <Image src={HeaderImage} className="titleImage" alt="Header Image" height="400" width="100%" />
                <div className="title" >
                    Journal Prompts
                    <br /><br /><br />
                    <Button color='red' className='createJournalButton' href="/signup">Create Your First Journal</Button>
                </div>
            </div>

            <div style={{textAlign: 'center'}}>
                <div class="ui horizontal list">
                    <div class="item">
                        <div class="content">
                            <div class="header"><a href="/">Home</a></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <div class="header">/</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <div class="header"><a href="/introduction">Journals</a></div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <div class="header">/</div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="content">
                            <div class="header">Journal Prompts</div>
                        </div>
                    </div>
                </div>
            </div>

            <h1>What is a Journal Prompt?</h1>
            <p>
                A journal prompt is a written statement designed to inspire you or offer you an idea of what to write about.
                This does not take into account your love of, or lack of writing. Rather, it is to encourage you to document your thoughts and feelings 
                safely within a private manner. Prompts are great for helping beginning writers get into journal writing. 
            </p>
            <p>
                Basic journal prompts can be used by anyone to help get past a temporary block. The best journal prompts inspire you to look deep inside yourself for inspiration, 
                and to discover and capitalize on some of the hidden thoughts and ideas you hadn't previously recognized or even considered. With practice, you can develop the ability to find inspiration in everything you see. 
                But, when you're just getting into journal writing, or when you're really stuck, these suggested journal prompts can be very helpful.
            </p>
            <br /><br /><br />

           <SignUpGrid />
            <br /><br /><br />
            
            <h1>Journal Writing Prompts</h1>

            <p style={{textAlign: 'center'}}>Below are some examples of journal prompts to help you start a journal or to inspire a dedicated
                journal writer:
            </p>

            <h1>Write about Yourself</h1>
            <ul>
                <li>What frightens you?</li>
                <li>What makes you sad?</li>
                <li>What brings you joy?</li>
                <li>What worries you? Is there a pressing problem you need to work out?</li>
                <li>Write a letter to someone that upset you, but you aren't ready to confront in person.</li>
                <li>Write down the things you wished you had said to your parents, or other loved ones before they passed away.</li>
                <li>Write down confessions of your deep down secrets that you can't tell anyone.</li>
            </ul>

            <h1>Write about the Past</h1>
            <ul>
                <li>Write about your childhood.</li>
                <li>Write a letter to your older self.</li>
                <li>Write about your school life, your grades, what you wish you had done differently.</li>
                <li>Write about lost friendships.</li>
                <li>Write about regrets you may have.</li>
                <li>Write about turning points in your life – what would be different now if you had made a different choice.</li>
            </ul>

            <h1>Write about the Present</h1>
            <ul>
                <li>Write letters to friends and family members about things you can't say to them in person.</li>
                <li>Write letters to your boss or coworkers.</li>
                <li>Write about your friends, coworkers and family members, describing what they are like, what you like and dislike about each one, etc.</li>
                <li>Write about your job, pets, your home, etc.</li>
                <li>Write about your daily activities so you can look back and remember each moment.</li>
                <li>Add photos to your entries to make them more special.</li>
            </ul>

            <h1>Write about the Future</h1>
            <ul>
                <li>Where do you want to be 5, 10, or 15 years from now?</li>
                <li>What line of work do you plan on pursuing in the future?</li>
                <li>Write down how you can improve your life.</li>
                <li>Write about children you plan to have, and what you wish for them.</li>
                <li>Write letters to your future children and grandchildren that you can give to them when they are older. 
                    These letters will help them understand the type of person you were at their age.</li>
                <li>Write about places you wish to see, vacations you plan to have.</li>
                <li>Write about home improvements you would like to make.</li>
                <li>Make a bucket list.</li>
            </ul>
            <br />

            <p>
                A journal can serve as a valuable asset to any individual when documenting their life's most important accolades and experiences.
                Keeping and maintaining a journal is certain to enhance your life in some format. <span style={{color: 'red', fontFamily: 'cursive'}}>Compositzo's</span> online platform provides you a secure and private 
                location to keep any journal you like. Online journals never get lost or stolen, and can be accessed from anywhere at your personal conveinence. 
            </p>
            <br /> <br />

            <SignUpGrid />
            
            <br /><br /><br />

               <Footer /> 
     </div>
    )


}
export default JournalPrompts