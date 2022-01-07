import React from 'react'


function EntryInfo(props) {

    // const layout = {
    //     card: {
    //         backgroundColor: "#bec7a6", 
    //         opacity: "0.8",
    //         borderRadius: "10px"
    //     }
    // }

     const {title, date, mood, content } = props.entry

    return(
        <div>
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="..." alt="Card" />
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{date}</p>
                <p class="card-text">{mood}</p>
                <p class="card-text">{content}</p>
                <a href="#" class="btn btn-secondary">Open</a>
            </div>
        </div>

        </div>
        // <Card style={layout.card}>
           
        //         <Card.Content  >
        //             <Card.Header>
        //                { title } 
        //             </Card.Header>
        //             <Card.Description>
        //                 Date { date }
        //                 <br />
        //                 Mood: { mood } 
        //                 <br />
        //                 Content: { content }
        //                 <br />  
        //             </Card.Description>
        //         </Card.Content>
        // </Card>
    )
}

export default EntryInfo;