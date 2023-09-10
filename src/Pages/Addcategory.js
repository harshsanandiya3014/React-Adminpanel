import React , {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "../Components/Navbar";
import Api from '../Api/Api'
import { useNavigate } from "react-router-dom";

export default function Addcategory() {
  const [category, setcategory] = useState({})

  let navi = useNavigate()

  let handleSubmit = (event) =>{
    event.preventDefault()
     console.log("the value of task" + JSON.stringify(category)) 
      Api.insert('category',category).then((result)=>{
        console.log("result added")
        navi(`../showcategory`)
       
      })
 }

 let handleChange = (e)=>{
 
 if(e.target.name == "name" || e.target.name == "category")
 
 {
  setcategory({...category,[e.target.name]:e.target.value})  
 }
} 
   
  return (
    <div className="content">
     <Navbar/>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name"  onChange={handleChange} value={category.name}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>category</Form.Label>
          <Form.Control type="text" placeholder="category" name="category"  onChange={handleChange} value={category.category}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-2">
          Submit
        </Button>
      </Form>
    </div>
  );
}
