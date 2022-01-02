import React from 'react'
import HomePage from './unauthorized_components/HomePage'
import LoginForm from './unauthorized_components/LoginForm'
import SignUpForm from './unauthorized_components/SignUpForm'
import IntroductionPage from './unauthorized_components/IntroductionPage'
import ThreeYear from './unauthorized_components/ThreeYear'
import JournalPrompts from './unauthorized_components/JournalPrompts'
import JournalExamples from './unauthorized_components/JournalExamples'
import PregnancyPage from './unauthorized_components/PregnancyPage'
import TravelPage from './unauthorized_components/TravelPage'
import AboutPage from './unauthorized_components/AboutPage'
import ContactPage from './unauthorized_components/ContactPage'
import { Switch, Route } from 'react-router-dom'

function UnauthorizedUser({ setUser }) {

    return(
        <Switch>
            <Route exact path="/">
                <HomePage setUser={setUser} /> 
            </Route>
            <Route exact path="/login">
                <LoginForm setUser={setUser} /> 
            </Route>
            <Route exact path="/signup">
                <SignUpForm setUser={setUser} /> 
            </Route>
            <Route exact path="/introduction">
                <IntroductionPage setUser={setUser} /> 
            </Route>
            <Route exact path="/three-year-journal">
                <ThreeYear setUser={setUser} /> 
            </Route>
            <Route exact path="/journal-prompts">
                <JournalPrompts setUser={setUser} /> 
            </Route>
            <Route exact path="/pregnancy-journal">
                <PregnancyPage setUser={setUser} /> 
            </Route>
            <Route exact path="/journal-examples">
                <JournalExamples setUser={setUser} /> 
            </Route>
            <Route exact path="/travel-journal">
                <TravelPage setUser={setUser} /> 
            </Route>
            <Route exact path="/about">
                <AboutPage setUser={setUser} /> 
            </Route>
            <Route exact path="/contact">
                <ContactPage setUser={setUser} /> 
            </Route>
        </Switch>
    )
}

export default UnauthorizedUser