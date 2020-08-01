import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

class Navigation extends React.Component {   

    state = {
        key : this.props.currentPage.pageName
    }

    render() {
        const {pages} = this.props
        const {key} = this.state
        return(
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={key => this.setState({key})}
            >
                {pages.map(page=>
                    <Tab eventKey={page.pageName} title={page.pageName}>
                        {page.content}
                    </Tab>
                )}
            </Tabs>
            
        )
    }
}

export default Navigation