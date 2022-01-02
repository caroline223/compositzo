import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Button, Icon, Table, Card } from 'semantic-ui-react';
import EntryInfo from './entries_page/EntryInfo'




function EntryPage(){

    // const [entries, setEntries] = useState([])
    // const [filteredEntries, setFilteredEntries] = useState([])
    // const [searchInput, setSearchInput] = useState('')

    // useEffect(() => {
    //     fetch('/entries')
    //     .then(response => response.json())
    //     .then((data) => setEntries(data))
    // }, [])

    // const searchEntries = (event) => {
    //     setSearchInput(event.target.value)
    //     if(event.target.value !== ''){
    //         const filteredData = entries.filter(entry => entry.title.toLowerCase().includes(searchInput.toLowerCase()))
    //         setFilteredEntries(filteredData)
    //     } else {
    //        setFilteredEntries(entries)
    //     }
    // }

    // const entryDisplay = () => entries.map((entry) => <EntryInfo key={entry.id} entry={entry} />)
    // const filteredEntryDisplay = () => filteredEntries.map((entry) => <EntryInfo key={entry.id} entry={entry} />)

    return(
        <div>
           <Menu id='journalMenu' >
                <Menu.Item position="right" style={{color: 'white', fontWeight: 'bold'}}>Compositzo</Menu.Item>
                <Menu.Menu position='right'>
                    <Dropdown item text="Name"  style={{color: 'white', fontWeight: 'bold'}}>
                        <Dropdown.Menu>
                            <Dropdown.Item>Account</Dropdown.Item>
                            <Dropdown.Item>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
              </Menu>  
              <div style={{backgroundColor: 'gainsboro', textAlign: 'center'}}>
                            <div className="ui search searchBar" >
                                <div className="ui icon input" >
                                    <input  placeholder="Search Title" className="prompt"  />
                                    <i className="search icon" />
                                </div>
                            </div>   
              </div>
              <br /><br />
              <div style={{textAlign: 'center'}}>
                    <Button color='blue' href="/journal-page">New Entry&nbsp;&nbsp;&nbsp;&nbsp;
                                <Icon name='plus circle' />
                    </Button>
              </div>
              <br />
              <Table color='red'>
                  <Table.Header>
                      <Table.Row>
                          <Table.HeaderCell textAlign='center'>Entries</Table.HeaderCell>
                      </Table.Row>
                  </Table.Header>
              </Table>
{/*              
             <Card.Group itemsPerRow={3}>
                 {filteredEntries.length > 0 ? filteredEntryDisplay(): entryDisplay()}
             </Card.Group> */}
        </div>
    )
}
export default EntryPage