import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function JournalPage({ setUser }){

    const history = useHistory()

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

   

    const [text, setText] = useState('')

    const options = [
        { key: 1, text: 'Happy', value: 1 },
        { key: 2, text: 'Sad', value: 2 },
        { key: 3, text: 'Angry', value: 3 },
        { key: 4, text: 'Excited', value: 4 },
        { key: 5, text: 'Overwhelmed', value: 5 },
        { key: 6, text: 'Depressed', value: 6 },
        { key: 7, text: 'Anxious', value: 7 },
        { key: 8, text: 'Nervous', value: 8 },
        { key: 9, text: 'Frustrated', value: 9 },
        { key: 10, text: 'Distracted', value: 10 },
        { key: 11, text: 'Jealous', value: 11 },
        { key: 12, text: 'Hopeless', value: 12 },
        { key: 13, text: 'Exhausted', value: 13 },
        { key: 14, text: 'Lonely', value: 14 },
        { key: 15, text: 'Embarrassed', value: 15 },
      ]

    return(
       <div>
        <div id="journalImage" >
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/journal-page"><h2 style={{color: 'red'}} >Compositzo</h2></a>
                        <div style={{textAlign: 'right'}}>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                <a className="nav-link" href="/entries-page" style={{color: 'red'}}>Entries </a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" class="btn btn" style={{color: 'red'}} onClick={clickLogout}>Logout</button>
                                </li>
                                </ul>
                            </div>
                         </div>
                 </div>
            </nav>
            <form style={{padding: '100px'}}>
            <div class="form-group">
                <h3>Title</h3>
                <input 
                    type="text" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="name@example.com" 
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // required
                    />     
            </div>
            <br />
            <div class="form-group">
               <h3>Date</h3>
                <input 
                     type="date"
                     class="form-control" 
                     // value={email}
                     // onChange={(e) => setEmail(e.target.value)}
                     // required
                />
            </div>
            <br />
            <div class="form-group">
               <h3>How Are You Feeling?</h3>
               
            </div>
            <div class="form-group">
                <select class="form-select form-select-sm" aria-label=".form-select-sm example" options={options}>
                    <option value="1">Happy</option>
                    <option value="2">Sad</option>
                    <option value="3">Angry</option>
                    <option value="4">Excited</option>
                    <option value="5">Overwhelmed</option>
                    <option value="6">Depressed</option>
                    <option value="7">Anxious</option>
                    <option value="8">Nervous</option>
                    <option value="9">Frustrated</option>
                    <option value="10">Distracted</option>
                    <option value="11">Jealous</option>
                    <option value="12">Hopeless</option>
                    <option value="13">Exhausted</option>
                    <option value="14">Lonely</option>
                    <option value="5">Embarrassed</option>
                </select>    
            </div>
            <br />
            <div class="form-group">
                <h3>Content</h3>
                <div className='editor'>   
                    <CKEditor 
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData()
                            setText(data)
                        }}
                    />
                </div>
            </div>
            <br /><br />
            <div style={{textAlign: 'center'}}>
                <button type="button" className="btn btn-danger">
                     <div style={{ fontFamily: 'Optima'}}>
                         Save
                    </div>
                </button>
            
                <p style={{textAlign: 'center', fontFamily: 'Optima'}}><a className="btn btn btn-danger" href="/entries-page" >Back</a></p>
            </div>
            
        </form>

     </div>

        </div>
    )
}
export default JournalPage;


