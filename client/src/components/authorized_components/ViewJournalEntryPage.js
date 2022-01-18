import React, { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'


function ViewJournalEntryPage(){

    const [title, setTitle] = useState('')
    const [mood, setMood] = useState('')
    const [date, setDate] = useState('')
    const [content, setContent] = useState('')

    const { id } = useParams()

    // const [data, setData] = useState([])

    useEffect(() => {
        fetch(`/entries/${id}`)
        .then(response => response.json())
        .then(entry => {
            setTitle(entry.title)
            setMood(entry.mood)
            setDate(entry.date)
            setContent(entry.content)
        }) 
    }, [id])

   

    return(
        <div id="myJournalImage">
            <br />
            <h1 >Compositzo</h1>
           <br />
           <Card className="text-center" style={{margin: '100px'}}>
                <Card.Header style={{fontFamily: 'optima'}}>{title}</Card.Header>
                <Card.Body>
                    <Card.Text>
                    At this moment, I am feeling { mood }.
                    </Card.Text> 
                    <div style={{fontFamily: 'optima'}}>
                    {parse(`${content}`)}
                    </div>
                </Card.Body>
                <Card.Footer className="text-muted" style={{fontFamily: 'optima'}}>{date}</Card.Footer>
            </Card>
            <div style={{textAlign: 'center'}}>
            <Button variant="danger" style={{fontFamily: 'cursive'}} href={`/entries/${id}/edit-entry`}>Edit</Button>&nbsp;
            <Button variant="danger" style={{fontFamily: 'cursive'}} href="/entries-page">Back</Button>
           
            </div>
           
        </div>
    )



}
export default ViewJournalEntryPage 