import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { CardGroup } from 'react-bootstrap';
import EntryInfo from './entries_page/EntryInfo'


function EntryPage({ setUser }){

    const [entries, setEntries] = useState([])
    const [filteredEntries, setFilteredEntries] = useState([])
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        fetch('/entries')
        .then(response => response.json())
        .then((data) => setEntries(data))
    }, [])


    const searchEntries = (event) => {
        setSearchInput(event.target.value)
        if(event.target.value !== ''){
            const filteredData = entries.filter(entry => entry.title.toLowerCase().includes(searchInput.toLowerCase()))
            setFilteredEntries(filteredData)
        } else {
           setFilteredEntries(entries)
        }
    }

    const entryDisplay = () => entries.map((entry) => <EntryInfo key={entry.id} entry={entry} deleteEntry={deleteEntry} />)
    const filteredEntryDisplay = () => filteredEntries.map((entry) => <EntryInfo key={entry.id} entry={entry} deleteEntry={deleteEntry} />)


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

    const deleteEntry = (id) => {
        console.log(id)
        const remainingEntries = entries.filter(b => b.id !== id)
            setEntries(remainingEntries)
    }

   


    return(
        <div id="entriesImage">
           
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/entries-page"><h2 style={{color: 'red'}}>Compositzo</h2></a>
                        <div style={{textAlign: 'right'}}>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/journal-page" style={{color: 'red'}}>New Entry </a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link"  style={{color: 'red'}} href="/users/user-info" >My Account </a>
                                </li>
                                <li className="nav-item">
                                <button type="button" className="btn btn" style={{color: 'red'}} onClick={clickLogout}>Logout</button>
                                </li>
                                </ul>
                            </div>
                         </div>
                 </div>
            </nav>

            <div style={{padding: '150px'}}>
                <div className="input-group">
                    <input 
                        className="form-control border-end-0 border rounded-pill" 
                        type="text" 
                        placeholder='Search By Title'
                        onChange={searchEntries}  
                        />
                    <span className="input-group-append">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <br />
                <div style={{textAlign: 'center'}}>
                    <p style={{textAlign: 'center', fontFamily: 'fantasy'}}><a className="btn btn-lg btn-secondary" href="/journal-page" >New Entry</a></p>
                </div>
                    <br />
                <h1 style={{color: 'red'}}>Entries</h1>
                
                <CardGroup>
                  {filteredEntries.length > 0 ? filteredEntryDisplay(): entryDisplay()}
              </CardGroup>
            </div>       
             
         </div>
   )
}
export default EntryPage