import React from 'react';
import { Nav } from 'react-bootstrap';
import Headers from '../Layout/Headers'

function MainNavigation() {
    return (
        <Nav variant="pills" defaultActiveKey="/home">
           
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Headers/>
        </Nav>
    );
}

export default MainNavigation;