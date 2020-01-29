import React from 'react';
import { Navbar, Form, Row, Col, Button, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../index.css'
import Signup from './signup'
class Login extends React.Component {

    render() {
        return (
            <div className="container-fluid h-100">
                <Row className="h-100">
                    <Col className="d-none d-md-block d-lg-block" md={6} id="yellow"></Col>
                    <Col xs={12} md={6} >
                        <Container className="cont-sign-in">
                                    <Form>
                                        <p className="h5 text-center mb-4" style={{backgroundColor:"1ps solid #f75011"}}>Sign In</p>
                                        <div className="grey-text">
                                            <Form.Control className="inp-bdr mb-3"  name="Username" placeholder="Username" />
                                            <Form.Control type="password" className="inp-bdr mb-3"  name="Password" placeholder="Password" />
                                        </div>
                                        <Row>
                                            <Col>
                                            <Form.Check
                                                custom
                                                type='checkbox'
                                                className="fanc-check"
                                                label={`Remember me`}
                                            />
                                            </Col>
                                            <Col style={{textAlign: "Right"}}>
                                            <label>
                                                Forget Password?
                                            </label>
                                            </Col>
                                        </Row>
                                        <Button className="loginBtn">Sign in</Button>
                                        <label className="loginOr">Or</label>
                                        <Link to="/signup">
                                        <Button className="signupBtn">
                                            Sign Up
                                        </Button></Link>
                                
                                        
                                    </Form>
                        </Container>

                    </Col>
                </Row>
            </div>
          
        );
    };
}

export default Login;