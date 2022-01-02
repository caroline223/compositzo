import React from 'react'
import { Card } from 'semantic-ui-react'


function EntryInfo(props) {

    const layout = {
        card: {
            backgroundColor: "#bec7a6", 
            opacity: "0.8",
            borderRadius: "40px"
        }
    }

    const {title, date, mood, content } = props.entry

    return(
        <Card style={layout.card}>
            {/* <Image src={ url } className="cardImage" /> */}
                <Card.Content  >
                    <Card.Header>
                       { title } 
                    </Card.Header>
                    <Card.Description>
                        Date { date }
                        <br />
                        Mood: { mood } 
                        <br />
                        Content: { content }
                        <br />  
                    </Card.Description>
                </Card.Content>
        </Card>
    )
}

export default EntryInfo;