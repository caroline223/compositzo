import React from 'react'
import SignUpPhoto from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-skylar-kang-6045025.jpg'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'


function SignUpForm() {

    return(
        <div 
            style={{ backgroundImage: `url(${SignUpPhoto})`, backgroundSize: '33%', backgroundRepeat: 'repeat'}} >
            <Grid textAlign='center' style={{ height: '100vh', fontFamily: 'Optima' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, opacity: '0.85' }}>
                <Header as='h2' color='grey' textAlign='center'>
                    <div style={{ fontFamily: 'Optima', fontSize: '42px', fontWeight: 'bold'}}>
                            Sign Up
                    </div>
                </Header>
                <br />
                <Form size='large'>
                    <Segment stacked>
                        <Form.Input label='Enter email address' 
                            placeholder='joe@schmoe.com' 
                            type="text"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Form.Input label='Create Username' 
                            type="text"
                            // value={username}
                            // onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                         <Form.Input label='Create Password' 
                            type='password' 
                            id="password"
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Form.Input label='Confirm Password' 
                            type='password' 
                            id="password_confirmation"
                            // value={passwordConfirmation}
                            // onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />

                        <Button color='grey' fluid size='large'>
                            <div style={{ fontFamily: 'Optima'}}>
                                Submit
                            </div>
                        </Button>
                        <br />
                        <Button color='grey' fluid size='large' href="/">
                            <div style={{ fontFamily: 'Optima'}}>
                                Home
                            </div>
                        </Button>
                    </Segment>
                </Form>
            
                </Grid.Column>
            </Grid>
        </div>
    )




}

export default SignUpForm