import React from 'react'


function SignUpGrid(){

    return(
        <div>
                <div className="container" style={{opacity: '0.7'}}>
                    <div className="row" style={{backgroundColor: '#f90606'}}>
                        <div className="col-sm">
                        <p style={{textAlign: 'center', color: 'white', fontFamily: 'cursive'}}>Time is of the essence! Don't hesitiate! - Start your free
                            online journal today!
                        </p>
                        </div>
                        <div className="col-sm" style={{textAlign: 'center', fontFamily: 'cursive'}}>
                        <p style={{textAlign: 'center'}}><a className="btn btn-lg btn-light" href="/signup" >Start Now!</a></p>
                        </div>
                        
                    </div>
                </div>
        </div>
    )


}
export default SignUpGrid;