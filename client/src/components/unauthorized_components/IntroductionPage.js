import React from 'react'
import NavBar from '../NavBar'
import SignUpGrid from '../SignUpGrid'
import Footer from '../Footer'
import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'


function IntroductionPage(){

return(
    <div>
         <NavBar />
         
        <div>
            <img src={HeaderImage} className="titleImage" alt="Header" />
            <div className="title" >
                What is a Journal? 
                <br />
                <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-danger" href="/signup" >Create Your First Journal</a></p>
            </div>
          
                <nav aria-label="breadcrumb" >
                    <ol className="breadcrumb"  >
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">What is a Journal?</li>
                    </ol>
                </nav> 
          
            
       </div>
       
            <p>
                According to Webster's Dictionary, a journal is a record of experiences, ideas, or reflections 
                regularly for private use. It can be used to detail everything from your feelings toward a particular situation in your 
                personal life to your thoughts on a current event happening in the world. As such, journals serve a wide range of purposes.
                A journal serves as an amalgamation of your thoughts, feelings, emotions, and observations on a plethora of things and put those things 
                into writing. Therefore, you would be better able to remember what you did, what you thought, and what was happening at the time you 
                wrote the journal piece.  
            </p>

            <h1> Journal Types</h1>
            <p>
                There exists a plethora of journals for one to document their personal and intimate thoughts Therefore, a large variety of needs and 
                desires can be documented by keeping a journal. Journal types include:
            </p>
                <ul>
                    <li>A daily journal, which can be used to document import and memorable moments from your life.</li>
                    <li>A dream journal, which allows you to document those vivid and far-fetched dreams onto paper.</li>
                    <li>A bible journal, journal that enables you to write your thoughts as you read the bible.</li>
                    <li>A hobby journal to write about your personal interests. For example, if you are into cooking, consider writing about 
                        the new dish that you created.
                    </li>
                    <li>And many, many more...</li>
                </ul>
            

            <h1>Why Journal?</h1>
            <p>
                To get into journaling, one must understand their purpose for journaling. A journal offers you the privacy to detail 
                your intimate thoughts and feelings in a safe space. You can improve your writing skills through creating stories of your life. You can write 
                about goals, dreams, and aspirations that you wish to obtain within your lifetime. You can keep track of what you eat. In other words,
                you can write about anything as you please. Journals offer the ulitmate benefit in that you are not writing to entertain an audience of readers. Rather,
                you are writing strictly for your own personal satisfaction, and personal growth. 
            </p>
            <p>
                A journal can serve as a valuable asset to any individual when documenting their life's most important accolades and experiences.
                Keeping and maintaining a journal is certain to enhance your life in some format. <span style={{color: 'red', fontFamily: 'cursive'}}>Compositzo's</span> online platform provides you a secure and private 
                location to keep any journal you like. Online journals never get lost or stolen, and can be accessed from anywhere at your personal conveinence. 
            </p>
            <br /><br /><br /><br />

           <SignUpGrid />
            
            
            <br /><br /><br />
        
        <Footer />
             
    </div>
)


}

export default IntroductionPage;