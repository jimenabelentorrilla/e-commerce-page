import React from 'react';
import { useState } from 'react';
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart.svg";
import Avatar from "../assets/image-avatar.png";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Nav = () => {
  return (
    <>
    <Container>
        <Row>
            <Col>
                <div className="nav-1005">
                    <div className="nav-flex">
                        <div>
                            <img src={Logo} className="logo"/>
                        </div>
                        <ul className="ul-flex">
                            <li className="navigation-item">Collections</li>
                            <li className="navigation-item">Men</li>
                            <li className="navigation-item">Women</li>
                            <li className="navigation-item">About</li>
                            <li className="navigation-item">Contact</li>
                        </ul>
                    </div>
                    
                    <div className="icons-container">
                        <div>                        
                            <img src={Cart} className="cart-icon" />
                        </div>
                        <div>                        
                            <img src={Avatar} className="avatar"/>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>    
    </>
  )
}

export default Nav;