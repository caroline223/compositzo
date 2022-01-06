import React from 'react'



function SignUpForm() {

    return(
        <div id="signUpPageImage" >
            <div style={{ height: '100vh', fontFamily: 'Optima' }} verticalAlign='middle'>
                <div className="column" style={{ padding: '5px 250px', opacity: '0.85' }}>
                <header as='h2' color='grey'>
                    <div style={{ fontFamily: 'Optima', fontSize: '42px', fontWeight: 'bold', 
                        textAlign: 'center'}}>
                            Sign Up
                    </div>
                </header>
                <br />
  
        
            <form  >
        <div class="form-floating"  >
          <input 
            type="email" 
            class="form-control" 
            id="floatingInput" 
            placeholder="name@example.com" 
          />
          <label for="floatingInput" >Email address</label>
        </div>
            <br />
         <div class="form-floating">
          <input 
            type="text" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Username" 
          />
          <label for="floatingInput">Create Username</label>
        </div>
            <br />
        <div class="form-floating">
            <input 
                type="password" 
                class="form-control" 
                id="floatingPassword" 
                placeholder="Password" 
            />
            <label for="floatingPassword">Create Password</label>
         </div>
         <br />
         <div class="form-floating">
            <input 
            type="password" 
            class="form-control" 
            id="floatingInput" 
            placeholder="Password" 
            />
            <label for="floatingInput">Confirm Password</label>
        </div>
            <br /><br />
      <br />
    <button class="w-100 btn btn-lg btn-secondary" type="submit">Submit</button>
    <br /><br />
      <button class="w-100 btn btn-lg btn-secondary"><a href="/" style={{color: 'white'}}>Home</a></button>
    </form>
            </div>
    
                </div>
            </div>
        
    )




}

export default SignUpForm