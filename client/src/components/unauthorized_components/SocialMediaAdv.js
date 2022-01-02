import React from 'react'
import { Grid, Header, Image, Segment } from 'semantic-ui-react'

function SocialMediaAdv(){

return(
    <div>         
    <Segment  vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column>
                    <Header style={{ fontSize: '2em', textAlign: 'center', fontFamily: 'fantasy' }}>Loved by more than 3,000,000 writers worldwide, featured on...</Header> 
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={4} >
                    <Image rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1zUzrCVye1-CZydYy7TgK65mbC3SNdYwfQ&usqp=CAU' />
                </Grid.Column>
                <Grid.Column width={4} >
                    <Image rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU6rs27i3nNFouNUIefHlAG3hdaA3QwPD5ZQ&usqp=CAU' />
                </Grid.Column>
                <Grid.Column width={4} >
                    <Image rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujKdv9uVWZi5Y7A_Z6QokOVw6x-R3XV-TdlpCmeYO_AwUEoUPPGWTDOFMeXoiVAzx0pA&usqp=CAU' />
                </Grid.Column>
                <Grid.Column width={4} >
                    <Image rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzDZe6A5VnePjXHO5KYlu7rmA8D5sFKCtLJBjcDs0wZu665aN4zgnUSsRDolNkIMxEKCc&usqp=CAU' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

    </div>
)




}

export default SocialMediaAdv