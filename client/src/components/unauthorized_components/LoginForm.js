import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

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
              history.push('/entries-page')
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
          <div style={{ height: '100vh', fontFamily: 'Optima' }} verticalAlign='middle'>
                <div className="column" style={{ padding: '5px 250px', opacity: '0.85' }}>
                  <header as='h2' color='grey'>
                      <div style={{ fontFamily: 'Optima', fontSize: '42px', fontWeight: 'bold', 
                          textAlign: 'center'}}>
                              Login
                      </div>
                  </header>
                </div>

        <form style={{padding: '200px'}} onSubmit={handleSubmit}>
        <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          <label for="floatingInput">Username</label>
        </div>
      <br />
        <div class="form-floating">
         <input 
                type="password" 
                class="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
          <label for="floatingPassword">Password</label>
         </div>
      <br />
    <button class="w-100 btn btn-lg btn-secondary" type="submit">Sign In</button>
     
    <p style={{textAlign: 'center'}}><a className="w-100 btn btn-lg btn-secondary" href="/" >Home</a></p>
    </form>
    <input class="form-control" type="text" value={errors} style={{color: 'red', textAlign: 'center', fontFamily: 'cursive'}} readonly></input>
  </div>
  
         
      
      
   
        </div>
       
    ) 
  
}

export default LoginForm; 