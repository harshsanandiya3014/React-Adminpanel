import React ,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../Components/Navbar";
import Api from '../Api/Api'
import { useNavigate } from "react-router-dom";

export default function AddUsers() {

const [user, setuser] = useState({})
let navi = useNavigate()


let handleSubmit = (event) => {
  event.preventDefault()
  console.log("the value of task " + JSON.stringify(user))
  Api.insert('users',user).then((result)=>{
    console.log("result add")
  })
  navi(`../showusers`)
}

let handleChange = (e) => {
  if(e.target.name == "name" || e.target.name == "surname")
 
 {
  setuser({...user,[e.target.name]:e.target.value})  
 }
}

  return (
    <div className="content">
     <Navbar/>
      <Form  onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange} value={user.name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>surname</Form.Label>
          <Form.Control type="text" placeholder="surname" name="surname"  onChange={handleChange} value={user.surname}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}
