import React from 'react'
import { Card, Button } from 'react-bootstrap'


function EntryInfo(props) {

    // const layout = {
    //     card: {
    //         backgroundColor: "#bec7a6", 
    //         opacity: "0.8",
    //         borderRadius: "10px"
    //     }
    // }

     const {title, date} = props.entry

    return(
        <div>
            <Card className="text-center" style={{padding: '10px', margin: '11px'}}>
                <Card.Body>
                    <Card.Title style={{fontFamily: 'optima'}}>{title}</Card.Title>
                    <Card.Text style={{textAlign: 'center'}}>
                        {date}
                    </Card.Text>
                    <Button variant="secondary" style={{fontFamily: 'cursive'}}>View Entry</Button>&nbsp;
                    <Button variant="secondary" style={{fontFamily: 'cursive'}}>Edit</Button>
                    <br /> <br />
                    <Button variant="danger" style={{fontFamily: 'cursive'}}>Delete</Button>
                </Card.Body>
            </Card>   
        </div>

    )
}

export default EntryInfo;