import React from 'react'
import Footer from '../Footer'
import SocialMediaAdv from './SocialMediaAdv'
import { Button, Grid, Header, Icon, Image, Segment, Menu } from 'semantic-ui-react'
import HomeImage from '/Users/carolineforrester/Flatiron/code/phase_5/project-template-react-rails-api/client/src/images/pexels-lisa-1006293.jpg'
  

function HomePage() {

    return(
        <div>
            <Image src={HomeImage} alt="Home Image" height="900" width="100%" />
              <Menu id="homeMenu">
                <Menu.Item position='right' href="/login">Log In</Menu.Item>
                <Menu.Item href="/signup">Sign Up</Menu.Item>
              </Menu>
            <div id="homeTitle">
              Compositzo
            </div> 
            <div id="homeCaption">
                  The most secure, private journal you've ever owned! <br /><br />
                  Don't believe? Try it out! <br /><br />
                    <Button color='red' id="homePageButton" href="/signup">Create Your Free Journal Now!</Button>
            </div>
        <SocialMediaAdv />
       
                 
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={7}>
            <div>
              <h2>What's your purpose for writing?</h2>
            </div>
            <p style={{ fontSize: '1.33em', textAlign: 'left' }}>
              Whether you want to track your daily activites, record your achievements, take notes of your dreams,
              or jot down aspiring thoughts and inspirations, we have all of the tools you need to record your thoughts
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8am91cm5hbHxlbnwwfHwwfHw%3D&w=1000&q=80' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
            <Grid.Column floated='left' width={6}>
                <Image bordered rounded size='large' src='https://st.depositphotos.com/1571889/1823/i/600/depositphotos_18235681-stock-photo-login-screen.jpg' />
            </Grid.Column>
            <Grid.Column width={8}>
              <div>
                <h2 style={{textAlign: 'center'}}>We Value Your Privacy</h2>
              </div>
              <p style={{ fontSize: '1.33em', textAlign: 'right' }}>
              We believe that journaling represents an intimate moment one is having with themselves with regards to their thoughts,
              feelings, emotions, and/or actions. Furthermore, without protection, anyone can gain access to anyone's personal journals/diaries.
              Therefore, we provide authentication to ensure that the right person views their respective content at any given time.
              </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row></Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size="huge" color="red" href="/journal-examples">Sample Journals</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{fontSize: '2em' }}>
              "One of a kind!"
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'center' }}>The most organized journal app I've ever used!</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "No need to use another app again."
            </Header>
            <p style={{ fontSize: '1.33em', textAlign: 'center' }}>
              <b>Caroline</b> Social Media Influencer
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    
    <Segment style={{ padding: '8em 0em', backgroundColor: 'lightGrey' }} vertical>
        <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
                <Grid.Column>
                    <h2 style={{textAlign: 'center'}}>Ready to begin writing? Join us now!</h2>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{textAlign: 'center'}}>
                    <Button size="huge" href="/signup" color="red">Get Started
                        <Icon name='right arrow' />
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>

    <Footer />

  </div>
    )

}

export default HomePage