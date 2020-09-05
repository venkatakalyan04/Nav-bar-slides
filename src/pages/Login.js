import React,{Component} from "react";
import{ Button,Form,FormGroup,Label,Input } from 'reactstrap';
import{ FacebookLoginButton, GoogleLoginButton} from 'react-social-login-buttons';
import './logo.css';

class LogicForm extends Component {
    render() {
    return (
      <Form className="login-form">
        <h1>
          <span className="font-weight-bold">108techrosoft</span>.com
        </h1>
        <h2 className="text-center">Welcome</h2>
        <FormGroup>
          <Label>Email</Label>
          
          <Input type="email"placeholder="Email"/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          
          <Input type="password"placeholder="Password"/>
        </FormGroup>
        <button className="btn-lg btn-dark btn-block">
          Login
        </button>
        <div className="text-center pt-3">
          continue with your social accounts
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <GoogleLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/forgot-password">Forgot Password</a>
  
        </div>
  
      </Form>
    );
  }
  }
  
  export default LogicForm;
  