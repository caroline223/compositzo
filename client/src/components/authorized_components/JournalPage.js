import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function JournalPage({ setUser }){

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [mood, setMood] = useState('Happy')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState([])
   

   
    const history = useHistory()

    const createEntry = (event) => {
        event.preventDefault()
        fetch('/entries', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
              title,
              date,
              content,
              mood
          })
        })
        .then(response => {
            if(response.ok){
                response.json()
                .then(user => {
                    setUser(user)
                    history.push('/entries-page')
                })
            }
            else {
                response.json()
                .then(errors => {
                    setErrors(errors.errors)
                })
            }
        })
    }

    const clickLogout = () => {
        fetch(`/logout`, {
        method: 'DELETE',
        credentials: 'include'
        })
        .then((response) => {
            if (response.ok) {
            setUser(null) 
            history.push('/logout')
            }
        })
    }

   
   
  
    return(
       <div>
        <div className="journalImage" >
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/journal-page"><h2 style={{color: 'red'}} >Compositzo</h2></a>
                        <div style={{textAlign: 'right'}}>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/entries-page" style={{color: 'red'}}>Entries </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/users/user-info"  style={{color: 'red'}}>My Account </a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn" style={{color: 'red'}} onClick={clickLogout}>Logout</button>
                                </li>
                                </ul>
                            </div>
                         </div>
                 </div>
            </nav>
            <form style={{padding: '100px'}} onSubmit={createEntry}>
            <div className="form-group">
                <h3>Title</h3>
                <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />     
            </div>
            <br />
            <div className="form-group">
               <h3>Date</h3>
                <input 
                     type="date"
                     className="form-control" 
                     value={date}
                     onChange={(e) => setDate(e.target.value)}
                     required
                />
            </div>
            <br />
            
            <div className="form-group" >
            <h3>How Are You Feeling?</h3>
                <select className="form-select form-select-sm" 
                        aria-label=".form-select-sm example" 
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                        required
                        >
                    <option value="Happy">Happy</option>
                    <option value="Sad">Sad</option>
                    <option value="Angry">Angry</option>
                    <option value="Excited">Excited</option>
                    <option value="Overwhelmed">Overwhelmed</option>
                    <option value="Depressed">Depressed</option>
                    <option value="Anxious">Anxious</option>
                    <option value="Nervous">Nervous</option>
                    <option value="Frustrated">Frustrated</option>
                    <option value="Distracted">Distracted</option>
                    <option value="Jealous">Jealous</option>
                    <option value="Hopeless">Hopeless</option>
                    <option value="Exhausted">Exhausted</option>
                    <option value="Lonely">Lonely</option>
                    <option value="Embarrassed">Embarrassed</option>
                    
                </select> 

                <h3>Content</h3>
                <div className='editor'> 
                    <CKEditor 
                            editor={ClassicEditor}
                            value={content}
                            onChange={(event, editor) => {
                                const data = editor.getData() 
                               setContent(data)
                            }}
                        />       
                </div>  
            </div>
            <br />
           
            <br /><br />
            <div style={{textAlign: 'center'}}>
                <button type="submit" className="btn btn-danger">
                     <div style={{ fontFamily: 'Optima'}}>
                         Save
                    </div>
                </button>
                <p style={{textAlign: 'center', fontFamily: 'Optima'}}><a className="btn btn btn-danger" href="/entries-page" >Back</a></p>
            </div>
            
        </form>

        <input className="form-control" type="text" value={errors}  style={{color: 'red', textAlign: 'center', fontFamily: 'cursive'}} readOnly></input> 
     </div>

        </div>
    )
}
export default JournalPage;


