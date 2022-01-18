import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

import { useParams } from 'react-router-dom'


function AccountInfoPage(){

    const [fullname, setFullName] = useState("")
    const [birthdate, setBirthDate] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    

    const { id } = useParams()

    useEffect(() => {
        fetch(`/users/${id}`)
        .then(response => response.json())
        .then((user) => {
            setUsername(user.username)
            setEmail(user.email)
            setFullName(user.fullname)
            setBirthDate(user.birthdate)
        })
    }, [id])

   

    return(
        <div id="myJournalImage">
        <br />
        <h1 >Compositzo</h1>
       <br />
       <Card className="text-center" style={{margin: '100px'}}>
            <Card.Header style={{fontFamily: 'optima'}}>Account Information</Card.Header>
            <Card.Body>
                <Card.Text>
                Full Name: {fullname}
                </Card.Text>
                <Card.Text>
                Birthday: {birthdate}
                </Card.Text>
                <Card.Text>
                Username: {username} 
                </Card.Text>
                <Card.Text>
                Email Address: {email}
                </Card.Text>
            </Card.Body>
        </Card>
        <div style={{textAlign: 'center'}}>
        <Button variant="danger" style={{fontFamily: 'cursive'}} href="/entries-page">Back</Button>
       
        </div>
       
    </div>
    )


}
export default AccountInfoPage