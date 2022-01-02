import React from 'react'
import NavBar from '../NavBar'
import SignUpGrid from '../SignUpGrid'
import Footer from '../Footer'
import { Button, Image } from 'semantic-ui-react'
import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'



function PregnancyPage(){


    return(
        <div>
             <NavBar />
            <div>
                <Image src={HeaderImage} className="titleImage" alt="Header Image" height="400" width="100%" />
                <div id="pregnancyTitle" >
                    Pregnancy Journal: Tips and Tricks on How To Get Started
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
                            <div class="header">Pregnancy Journal</div>
                        </div>
                    </div>
                </div>
            </div>

                <p>
                    Whether you are a first time mother, or an experienced mother, pregnancy is always a journey an expectant mother 
                    experiences with their unborn child. In turn, you can easily feel overwhelmed because you have many different thoughts,
                    feelings, and emotions racing throughout your mind. How can you balance your new found set of priorities when your experiencing 
                    roller coaster emotions and "mommy brain" memory lapses?
                </p>
            

            
                <p>
                    Pregancy is one of the most rewarding times in a woman's life, with many milestones that deserves to be recorded
                    along the way. Perhaps the easiest way to caputue these moments is to document them in a journal.
                </p>
            


            <p>
                Below are the top eight ways that you can get the most out of your pregnancy journal:
                <ol>
                    <li>Jot down any unusual pregnancy symptoms when they occur to ensure you'll remember to ask 
                        the doctor about them later.
                    </li>
                    <li>Write down the amount of exercise you receive each day. According to The American College of Obstetrics and Gynecology, 
                        30 minutes or more of gentle daily exercise prevents back pain throughout your pregnancy.
                    </li>
                    <li>Take note of new food cravings that you experience.</li>
                    <li>During your first trimester, record your daily basal-body temperature.</li>
                    <li>Take note of any mood swings--as well as the moment that led to those fluctuations--as well as your response to such.</li>
                    <li>Brainstory baby names by jotting down your ideas and giving yourself time to think about them.</li>
                    <li>Include photos of nursery ideas, selfies of yor stomach, or even copies of your sonogram pictures into your journal
                        entries to collect precious memories. 
                    </li>
                </ol>
            </p>

            <h1>Ideas and Prompts</h1>

            <p>
                Beginning a journal, especially a pregancy journal, is never an easy task. Take a look at these <a href="/journal-prompts">prompts
                for journaling</a> to guide you.
            </p>

            <h2>The Day You Discovered</h2>

            <p>
                You will always remember the moment you found out you were pregnant. However, as the months and years go by,
                some of the details may start to get a little fuzzy to you. That's why some of the most popular pregnancy prompts revolve around the
                exciting--and very intense--first few weeks. Some examples of ideas to write about include:
                <ul>
                    <li>What pushed you to take a pregancy test?</li>
                    <li>What was your initial reaction when you saw the positive pregancy test?</li>
                    <li>How did you feel when you saw the first ultrasound?</li>
                    <li>What was your first pregnancy symptom?</li>
                </ul>
            </p>

            <h2>Body Changes</h2>
            <p>
                As you go through each trimester, you will experience major changes to your body as well as symptoms that you cannot just ignore.
                Make sure to record these changes so that when your child looks back at this, they would know exactly what you went through to bring 
                them into this world! Additionally, you might want to have an idea of which symptoms you felt in case you want to be prepared
                for any future pregnancies. Some good prompts include:
                <ul>
                    <li>Morning Sickness</li>
                    <li>Food Cravings</li>
                    <li>Favorite and Least Favorite Pregnancy Symptoms</li>
                    <li>Emotional Changes Throughout the Pregnancy</li>
                </ul>
            </p>

            <h2>All About the Baby</h2>
            <p>
                The most exciting pregnancy diary ideas to write about involve the actual baby growing inside of you.
                Thinking about your baby is likely the most exciting past of pregnancy because it truly makes all of the stretch-marks,
                weight-gains, morning sickness, as well as a plethora of other symptoms worth it. Some good prompts may include:

                <ul>
                    <li>What was your initial reaction when you first felt your baby move?</li>
                    <li>How did you feel when you heard your baby's heartbeat and/or saw their ultrasound?</li>
                    <li>How did you feel when you found out about their gender?</li>
                    <li>How did you choose their name?</li>
                    <li>What are your hopes and dreams for your baby's future?</li>
                </ul>
            </p>

            <br />
           <SignUpGrid />
           
            <br /><br /><br /><br />

            <Footer />            
        </div>
    )


}

export default PregnancyPage