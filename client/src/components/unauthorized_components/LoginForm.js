import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


function LoginForm({ setUser }) {

    const history = useHistory()

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    

    const handleSubmit = (event)  => {
      event.preventDefault()
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      })
        .then(response => {
          if (response.ok) {
            response.json()
            .then(user => {
              setUser(user)
              history.push('/entries')
            })
          } 
          else {
            response.json()
            .then(errors => {
              setErrors(errors.error)
            })
          }
        })
      }
  

    return(
        <div id="loginPageImage" >
            <Grid textAlign='center' style={{ height: '100vh', fontFamily: 'Optima' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='grey' textAlign='center'>
                <div style={{ fontFamily: 'Optima', fontSize: '36px'}}>
                           Account Login
                </div>
            </Header>
            <Form size='large' onSubmit={handleSubmit}>
                <Segment stacked>
                <Form.Input 
                      fluid 
                      icon="user" 
                      iconPosition="left" 
                      placeholder="Username"
                      type="text"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required 
                />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    name=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <Button  fluid size='large'>
                    <div style={{ fontFamily: 'Optima'}}>
                        Login
                    </div>
                </Button>
                <br />
                <Button  fluid size='large' href="/">
                    <div style={{ fontFamily: 'Optima'}}>
                        Home
                    </div>
                </Button>
                </Segment>
            </Form>
            <Message>
            {errors}
            </Message>
            <Message>
                Not a member? <a href="/signup">Sign Up</a>
            </Message>
           
            </Grid.Column>
            </Grid>
            
        </div>
    ) 
}

export default LoginForm; 