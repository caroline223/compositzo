import React from 'react'
import EntryPage from './authorized_components/EntryPage'
import JournalPage from './authorized_components/JournalPage'
import ViewJournalEntryPage from './authorized_components/ViewJournalEntryPage'
import AccountCreationSuccess from './authorized_components/AccountCreationSuccess'
import AccountInfoPage from './authorized_components/AccountInfoPage'
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
           <Route exact path="/success">
                <AccountCreationSuccess setUser={setUser} /> 
            </Route>
            <Route exact path="/entries/:id">
                <ViewJournalEntryPage setUser={setUser} /> 
            </Route>
            <Route exact path="/users/user-info">
                <AccountInfoPage setUser={setUser} /> 
            </Route>
       </Switch>
    )

}
export default AuthorizedUser