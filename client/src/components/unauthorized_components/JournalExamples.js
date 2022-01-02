import React from 'react'
import NavBar from '../NavBar'
import SignUpGrid from '../SignUpGrid'
import Footer from '../Footer'
import { Button, Image } from 'semantic-ui-react'
import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'



function JournalExamples(){


    return(
        <div>
             <NavBar />
            <div>
                <Image src={HeaderImage} className="titleImage" alt="Header Image" height="400" width="100%" />
                <div className="title" style={{fontSize: '70px'}} >
                    Journal Examples
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
                        <div class="header">Journal Examples</div>
                    </div>
                </div>
            </div>
        </div>

        <p>
            We believe that one who possess a journal values the relationship they have with themselves with regards to their 
            thoughts, feelings, emotions, and actions. Some people may use journaling to jot down notes on a daily basis. Others 
            may use journaling to document their most initimate thoughts, feelings, and emotions as they are experiencing them. Whatever the case may be,
            here are some journals that many writers find rewarding:

            <ul>
                <li><span style={{fontWeight: 'bold'}}>School Journal</span>: Used to keep track of school assigmnets, due dates, upcoming exams, etc.</li>
                <li><span style={{fontWeight: 'bold'}}>Project Journal</span>: Used when takling any project, big or small. Best used to document your journey through the process.</li>
                <li><span style={{fontWeight: 'bold'}}>Diet Journal</span>: Keeping record of eating habits when attempting to change your eating habits for a healthier lifestyle.</li>
                <li><span style={{fontWeight: 'bold'}}>Therapy Journal</span>: Therapeutic journaling can be done in tandem with sessions or in private</li>
                <li><span style={{fontWeight: 'bold'}}>Gratitude Journal</span>: Showing gratitude for the positive things/people in your life.</li>  
            </ul>

        </p>

        <h1>Journal Examples</h1>

        <p>
            Still stuck? Check out below for some inspiration:

            <ul>
                <li><a href="/https://offbeatbride.com/">Offbeat Bride: </a> Stories from a bride that didn't want a typical wedding.</li>
                <li><a href="/http://grouchyrabbit.com/">Grouchy Rabbit: </a> This community journal is a unique collection of thought-provoking sentences and snippets of wisdom.</li>
                <li><a href="/https://cozumelomuerte.wordpress.com/">Cozumel o Muerte:</a> This couple keeps track of their epic journey from Alberta to Quintana Roo, with 2 cats, Kitty and Bill.</li>
                <li><a href="/http://personapaper.com/article/11378-making-soup-for-a-night-in">Leftover Soup:</a> This journal writer is keeping track of recipes she creates in the spur of the moment.</li>
                <li><a href="https://notalwaysright.com/">Not Always Right:</a> Great stories that prove the customer really isn't always right.</li>
            </ul>
        </p>

        <p>
            Feeling inspired? Click below to crete a new account so that you would be able to write whenever and wherever you choose!
            Who knows? It can be the beginning of a long-lasting writing career!
        </p>

        <SignUpGrid />

        <br /><br /><br /><br />


        <Footer />

        </div>
    )



}

export default JournalExamples