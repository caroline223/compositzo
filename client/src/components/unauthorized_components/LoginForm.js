import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



function LoginForm() {

    // const history = useHistory()
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);

    

    // const handleSubmit = (event)  => {
    //   event.preventDefault()
    //   fetch('/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({username, password})
    //   })
    //     .then(response => {
    //       if (response.ok) {
    //         response.json()
    //         .then(user => {
    //           setUser(user)
    //         //   history.push('/entries-page')
    //         })
    //       } 
    //       else {
    //         response.json()
    //         .then(errors => {
    //           setErrors(errors.error)
    //         })
    //       }
    //     })
    //   }
  

    return(
        <div id="loginPageImage" >
         
          <br /><br /><br />
          <h1 class="h3 mb-3 fw-normal">Sign In</h1>
      
      <form style={{padding: '120px 230px'}}>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
    <br /><br />
        <div class="form-floating">
         <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
         </div>
      <br />
    <button class="w-100 btn btn-lg btn-secondary" type="submit">Sign In</button>
    <br /><br />
      <button class="w-100 btn btn-lg btn-secondary"><a href="/" style={{color: 'white'}}>Home</a></button>
    </form>
   
        </div>
    ) 
}

export default LoginForm; 