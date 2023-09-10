import React ,{useEffect,useState}  from 'react'
import Navbar from '../Components/Navbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../Api/Api'


export default function Updateproduct() {
   let params = useParams()  
   let navi = useNavigate()
  const [updatepro, setupdatepro] = useState({})

  let getData = () =>{
       console.log(params.id)
      Api.fetchData('products',params.id).then((result)=>{
        console.log("Result is" + JSON.stringify(result)) 
        setupdatepro(result)
        console.log("state change" + JSON.stringify(updatepro))
      })
  }

  let update1 = () => {
    console.log(updatepro) 
    Api.update('products',updatepro.id,updatepro).then((result)=>
    console.log("data updated"));
    // getData()
    navi(`../showproduct`)
  }

let prochange = (e) => {
  console.log(e.target.value) 
  setupdatepro({...updatepro,[e.target.name]:e.target.value}) 
}

  useEffect(() => {
   getData()
   
  }, [])
  
  return ( 
    <div>
    <Navbar/>
    <div className="content">
      
      {updatepro?<Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={prochange}
          value={updatepro.name}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Brand" name="Brand" onChange={prochange} value={updatepro.Brand}  />
        </Form.Group>

        <Button variant="primary" type="button" onClick={update1}>
        Update
        </Button>
      </Form> :<h2>Nothing</h2> }
    </div>
  </div>

    
  )
}
