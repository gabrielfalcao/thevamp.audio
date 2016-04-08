import React from 'react'
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Col } from 'react-bootstrap';


class HeaderView extends React.Component {
    render() {
        var jid = window.thevamp.jid;
        var self = this;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">The Vamp</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem href="http://thevampshop.com/collections">Shop</NavItem>
                        <NavItem href="/#/webmail">Webmail</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default HeaderView
