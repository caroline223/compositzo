import React from 'react'
import EntryPage from './authorized_components/EntryPage'
import JournalPage from './authorized_components/JournalPage'
import { Switch, Route } from 'react-router-dom'

function AuthorizedUser({ setUser }){

    return(
       <Switch>
           <Route exact path="/entries-page">
               <EntryPage setUser={setUser} />
           </Route>
           <Route exact path="/journal-page">
               <JournalPage setUser={setUser} />
           </Route>
       </Switch>
    )

}
export default AuthorizedUser