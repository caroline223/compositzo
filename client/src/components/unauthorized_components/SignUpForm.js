import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUpForm({setUser}) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullname, setFullName] = useState("")
    const [birthdate, setBirthDate] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errors, setErrors] = useState([])

    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault() // tells the user agent that if the event does not explicitly happen, then the default action should not occur
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                fullname,
                birthdate,
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
            <div style={{ height: '96vh', fontFamily: 'Optima' }} verticalalign='middle'>
                <div className="column" style={{ padding: '5px 250px', opacity: '0.85' }}>
                <header as='h2' color='grey'>
                    <div style={{ fontFamily: 'Optima', fontSize: '42px', fontWeight: 'bold', 
                        textAlign: 'center'}}>
                            Sign Up
                    </div>
                </header>
               
  
        
         <form onSubmit={handleSubmit} style={{padding: '50px'}} >
            
                <div className="form-floating"  >
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Full Name" 
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
                <label htmlFor="floatingInput" >Full Name</label>
                </div>
                <br />
                <div className="form-floating"  >
                <input 
                    type="date" 
                    className="form-control" 
                    placeholder="Birthday" 
                    value={birthdate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                />
                <label htmlFor="floatingInput" >Birthday</label>
                </div>
                <br/>
                <div className="form-floating"  >
                <input 
                    type="email" 
                    className="form-control" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="floatingInput" >Email Address</label>
                </div>
                    <br />
                <div className="form-floating">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingInput">Create Username</label>
                </div>
                    <br />
                <div className="form-floating">
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label htmlFor="floatingPassword">Create Password</label>
                </div>
                <br />
                <div className="form-floating">
                    <input 
                    type="password" 
                    className="form-control" 
                    id="password_confirmation" 
                    placeholder="Password" 
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    required
                    />
                    <label htmlFor="floatingInput">Confirm Password</label>
                </div>
               
               
                 <br /><br /><br /><br />
            
            <button className="w-100 btn btn-lg btn-secondary" type="submit">Submit</button>
            <br /><br />
            <p style={{textAlign: 'center'}}><a className="w-100 btn btn-lg btn-secondary" href="/" >Home</a></p>
        </form>
       
         </div>
         <input className="form-control" type="text" value={errors}  style={{color: 'red', textAlign: 'center', fontFamily: 'cursive'}} readOnly></input> 
     </div>
 </div>
        
    )




}

export default SignUpForm