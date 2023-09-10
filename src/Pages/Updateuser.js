import React ,{useEffect,useState}  from 'react'
import Navbar from '../Components/Navbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../Api/Api'

export default function Updateuser() {
  let params = useParams()  
  let navi = useNavigate()

  const [updateuser, setupdateuser] = useState({})

  let getData = () =>{
       console.log(params.id)
      Api.fetchData('users',params.id).then((result)=>{
        console.log("Result is" + JSON.stringify(result)) 
        setupdateuser(result)
        console.log("state change" + JSON.stringify(updateuser))
      })
  }

  let update1 = () => {
    console.log(updateuser) 
    Api.update('users',updateuser.id,updateuser).then((result)=>
    console.log("data updated"));
    navi(`../showusers`)
    //getData()
  }

let userchange = (e) => {
  console.log(e.target.value) 
  setupdateuser({...updateuser,[e.target.name]:e.target.value}) 
}

  useEffect(() => {
   getData()
   
  }, [])
  return (
    <div>
  <Navbar/>
    <div className="content">
    {updateuser?<Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={userchange}
          value={updateuser.name}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>category</Form.Label>
          <Form.Control type="surname" placeholder="surname" name="surname" onChange={userchange} value={updateuser.surname}  />
        </Form.Group>

        <Button variant="primary" type="button" onClick={update1}>
        Update
        </Button>
      </Form> :<h2>Nothing</h2> }
    </div>
    </div>
  )
}
