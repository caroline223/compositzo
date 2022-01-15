import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'

function AccountInfoPage(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(``)
        .then(response => response.json())
        .then((data) => setData(data))
    }, [])


    const { username, email } = data  
    
    return(
        <div id="myJournalImage">
        <br />
        <h1 >Compositzo</h1>
       <br />
       <Card className="text-center" style={{margin: '100px'}}>
            <Card.Header style={{fontFamily: 'optima'}}>Account Information</Card.Header>
            <Card.Body>
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