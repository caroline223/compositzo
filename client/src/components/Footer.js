import React from 'react'
import { Segment, Grid, Header, List, Container } from 'semantic-ui-react'

function Footer(){

    return(
        <div>
            <Segment vertical style={{ backgroundColor: 'grey', padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                <Grid.Row>
                    <Grid.Column width={5} style={{textAlign: 'center'}}>
                    <Header inverted as='h4' content='Compositzo' />
                    <List link inverted >
                        <List.Item href="/">Home</List.Item>
                        <List.Item href="/signup">Free Signup</List.Item>
                        <List.Item href="/login">Login</List.Item>
                    </List>
                    </Grid.Column>
                    <Grid.Column width={6} style={{textAlign: 'center'}}>
                    <Header inverted as='h4' content='Journals' />
                        <Grid divided inverted stackable>
                            <Grid.Row>
                            <Grid.Column width={8}>
                                <List link inverted>
                                    <List.Item href="/introduction">What is a Journal?</List.Item>
                                    <List.Item href="/journal-prompts">Journal Prompts</List.Item>
                                    <List.Item href="/journal-examples">Journal Examples</List.Item>
                                </List>  
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <List link inverted>
                                    <List.Item href="/three-year-journal">Three Year Journal</List.Item>
                                    <List.Item href="/pregnancy-journal">Pregnancy Journal</List.Item>
                                    <List.Item href="/travel-journal">Travel Journal</List.Item>
                                </List>  
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={5} style={{textAlign: 'center'}}>
                    <Header inverted as='h4' content='More On Us...' />
                    <List link inverted >
                        <List.Item href="/about">About</List.Item>
                        <List.Item href="/contact">Contact Us</List.Item>
                    </List>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
            </Segment>
    <div style={{textAlign: 'center', backgroundColor: 'grey', color:'white'}}>
       <p style={{textAlign: 'center'}}>Copyright &copy; 2021 by Caroline Forrester<br />
            Source: Penzu.com
        </p>
    </div>
        </div>
    )




}
export default Footer;