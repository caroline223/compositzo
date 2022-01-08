import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUpForm({setUser}) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                username, 
                password,
                email,
                password_confirmation: passwordConfirmation
            })
        })
        .then(response => {
            if (response.ok) {
              response.json()
              .then(user => {
                setUser(user)
                history.push('/success')
              })
            } 
            else {
                response.json()
                .then(errors => {
                    setErrors(errors.errors)
                })
            }
          })

    }

    return(
        <div id="signUpPageImage" >
            <br />
            <div style={{ height: '96vh', fontFamily: 'Optima' }} verticalAlign='middle'>
                <div className="column" style={{ padding: '5px 250px', opacity: '0.85' }}>
                <header as='h2' color='grey'>
                    <div style={{ fontFamily: 'Optima', fontSize: '42px', fontWeight: 'bold', 
                        textAlign: 'center'}}>
                            Sign Up
                    </div>
                </header>
               
  
        
         <form onSubmit={handleSubmit} style={{padding: '50px'}} >
            
                <div class="form-floating"  >
                <input 
                    type="email" 
                    class="form-control" 
                    id="floatingInput" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label for="floatingInput" >Email Address</label>
                </div>
                    <br />
                <div class="form-floating">
                <input 
                    type="text" 
                    class="form-control" 
                    id="floatingInput" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label for="floatingInput">Create Username</label>
                </div>
                    <br />
                <div class="form-floating">
                    <input 
                        type="password" 
                        class="form-control" 
                        id="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label for="floatingPassword">Create Password</label>
                </div>
                <br />
                <div class="form-floating">
                    <input 
                    type="password" 
                    class="form-control" 
                    id="password_confirmation" 
                    placeholder="Password" 
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                    />
                    <label for="floatingInput">Confirm Password</label>
                </div>
               
               
                 <br /><br /><br /><br />
            
            <button class="w-100 btn btn-lg btn-secondary" type="submit">Submit</button>
            <br /><br />
            <p style={{textAlign: 'center'}}><a className="w-100 btn btn-lg btn-secondary" href="/" >Home</a></p>
        </form>
       
         </div>
         <input class="form-control" type="text" value={errors}  style={{color: 'red', textAlign: 'center', fontFamily: 'cursive'}} readonly></input> 
     </div>
 </div>
        
    )




}

export default SignUpForm