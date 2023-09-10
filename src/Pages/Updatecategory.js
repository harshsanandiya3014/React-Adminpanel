import React ,{useEffect,useState}  from 'react'
import Navbar from '../Components/Navbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../Api/Api'

export default function Updatecategory() {

  let params = useParams()  
  let navi = useNavigate()

  const [updatecategory, setupdatecategory] = useState({})

  let getData = () =>{
       console.log(params.id)
      Api.fetchData('category',params.id).then((result)=>{
        console.log("Result is" + JSON.stringify(result)) 
        setupdatecategory(result)
        console.log("state change" + JSON.stringify(updatecategory))
      })
  }

  let update1 = () => {
    console.log(updatecategory) 
    Api.update('category',updatecategory.id,updatecategory).then((result)=>
    console.log("data updated"));
    navi(`../showcategory`)
    //getData()
  }

let catchange = (e) => {
  console.log(e.target.value) 
  setupdatecategory({...updatecategory,[e.target.name]:e.target.value}) 
}

  useEffect(() => {
   getData()
   
  }, [])
  return (
    <div>
  <Navbar/>
   
    <div className="content">

    {updatecategory?<Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={catchange}
          value={updatecategory.name}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>category</Form.Label>
          <Form.Control type="text" placeholder="category" name="category" onChange={catchange} value={updatecategory.category}  />
        </Form.Group>

        <Button variant="primary" type="button" onClick={update1}>
        Update
        </Button>
      </Form> :<h2>Nothing</h2> }
    </div>
    </div>
  )
}
