import React from 'react'
import { Card, Button } from 'react-bootstrap'


function EntryInfo(props) {


     const {id, title, date} = props.entry

     const removeEntry = (event) => {
        const id = parseInt(event.target.id)
        if(window.confirm("Are you sure?"))
        fetch(`/entries/${id}`, {
            method: 'DELETE'
        })
        .then(() => { props.deleteEntry(id) })
    }

    return(
        <div>
            <Card className="text-center"  style={{padding: '10px', margin: '11px'}}>
                <Card.Body>
                    <Card.Title style={{fontFamily: 'optima'}}>{title}</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                        {date}
                    </Card.Text>
                    <Button variant="secondary" style={{fontFamily: 'cursive'}} href={`/entries/${id}`}>View Entry</Button>&nbsp;
                    <br /> <br />
                    <Button variant="danger" style={{fontFamily: 'cursive'}} onClick={removeEntry} id={props.entry.id}>Delete</Button>
                </Card.Body>
            </Card>   
        </div>

    )
}

export default EntryInfo;