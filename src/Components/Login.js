import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Api from "../Api/Api";

export default function Login() {
  const [login, setlogin] = useState({});
const [alladmin, setalladmin] = useState([])

  let navi = useNavigate();

  let getData = () => {
    Api.fetchData("admin").then((result) => {
      console.log("Result is" + JSON.stringify(result));
      setalladmin([...result])
    });
  };

let  loginchange = (e) => {
  console.log(e.target.value) 
  setlogin({...login,[e.target.name]:e.target.value})
  
}

  let submitform = (event) => {
    event.preventDefault();
    console.log("text" + alladmin)
    console.log("the value of task" + JSON.stringify(login));
    let newarr = alladmin.filter(item=>item.email==login.email &&
      item.password==login.password)
   console.log("arr value" + newarr)
if (newarr.length >= 1) {
  alert("login sucess")
}
   else{
    alert("false")
   }
  };

  useEffect(() => {
    getData();
  }, 
  []);

  return (
    <div className="content">
      <Form onSubmit={submitform}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" id="uemail" onChange={loginchange} name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" id="upassword" onChange={loginchange} name="password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
