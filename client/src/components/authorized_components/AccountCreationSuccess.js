import React from 'react-router-dom'

function AccountCreationSuccess(){

    return(
        <div>
            <div className="accountImage">
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /><br />
                    <h2  style={{textAlign: 'center', color: 'gray', fontWeight: 'bolder'}}>You have successfully created your account. Please proceed to your account.</h2>
                <br /><br /><br />
                    <p style={{textAlign: 'center', fontFamily: 'cursive', opacity: '0.7'}}><a className="btn btn-lg btn-danger" href="/entries-page" >Enter</a></p>
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /><br />
            </div>
        </div>
       
    )




}
export default AccountCreationSuccess;