import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
// import ViewJournalEntryInfo from './ViewJournalEntryInfo'


function ViewJournalEntryContainer(){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(``)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])


    const { title, date, mood, content } = data

    return(
        <div id="myJournalImage">
            <br />
            <h1 >Compositzo</h1>
           <br />
           <Card className="text-center" style={{margin: '100px'}}>
                <Card.Header style={{fontFamily: 'optima'}}>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                       As of right now, I am in a(n) {mood} mood. <br /><br />
                    {content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted" style={{fontFamily: 'optima'}}>{date}</Card.Footer>
            </Card>
            <div style={{textAlign: 'center'}}>
            <Button variant="danger" style={{fontFamily: 'cursive'}} >Edit</Button>&nbsp;
            <Button variant="danger" style={{fontFamily: 'cursive'}} href="/entries-page">Back</Button>
           
            </div>
           
        </div>
    )



}
export default ViewJournalEntryContainer