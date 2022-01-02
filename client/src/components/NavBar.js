import React from 'react'
import { Menu} from 'semantic-ui-react'

function NavBar(){

    return(
        <div>
            <Menu 
                fixed="top"
                style={{ height: '70px'}}>
                <Menu.Item position='left' href="/"> <div className='logo'>Compositzo</div> </Menu.Item>
                <Menu.Item position='right' href="/login"> Login </Menu.Item>
                <Menu.Item href="/signup"> Sign Up </Menu.Item>
            </Menu>
        </div>
    )

}
export default NavBar;