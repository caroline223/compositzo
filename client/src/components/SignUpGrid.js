import React from 'react'
import { Grid, Button, Icon } from 'semantic-ui-react'

function SignUpGrid(){

    return(
        <div>
            <Grid  textAlign='center'  padded >
                <Grid.Row  height='30%' >
                    <Grid.Column color='red' width={5}>
                        <p style={{textAlign: 'center'}}>Time is of the essence! Don't hesitiate! - Start your free
                            online journal today!
                        </p>
                    </Grid.Column>
                    <Grid.Column color='red' width={5}>
                        <Button href='/signup' style={{backgroundColor: 'white'}}>Create your Journal
                            <Icon name='right arrow' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )


}
export default SignUpGrid;