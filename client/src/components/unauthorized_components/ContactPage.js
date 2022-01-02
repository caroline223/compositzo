import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';
import { Image, Table, Icon } from 'semantic-ui-react'
import HeaderImage from '/Users/carolineforrester/Flatiron/code/phase_5_2/project-template-react-rails-api/client/src/images/pexels-karolina-grabowska-4476376.jpg'



function ContactPage(){

    return(
        <div>
            <NavBar />

            <div>
            <Image src={HeaderImage} className="titleImage" alt="Header Image" height="400" width="100%" />
                <div className="title" >
                    Contact Us   
                </div>
            </div>


         <div style={{textAlign: 'center'}}>
            <div class="ui horizontal list">
                <div class="item">
                    <div class="content">
                        <div class="header"><a href="/">Home</a></div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="header">/</div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="header">Contact Us</div>
                    </div>
                </div>
            </div>
        </div>

        <br />

        <h1>Follow Us On Our Social Media Platforms!</h1>
        <div style={{padding: '80px'}}>
            <Table color='red'>
                <Table.Row style={{textAlign: 'center'}}>
                    <Table.Cell ><Icon name='instagram' color='purple'/>Instagram</Table.Cell>
                    <Table.Cell >@Compositzo</Table.Cell>
                </Table.Row>
                <Table.Row style={{textAlign: 'center'}}>
                    <Table.Cell><Icon name='facebook' color='blue' />Facebook</Table.Cell>
                    <Table.Cell>@Compositzo</Table.Cell>
                </Table.Row>
                <Table.Row style={{textAlign: 'center'}}>
                    <Table.Cell><Icon name='twitter' color='blue' />Twitter</Table.Cell>
                    <Table.Cell>@Compositzo</Table.Cell>
                </Table.Row>
            </Table>
        </div>
       
            <Footer />    
        </div>
    )



}
export default ContactPage;