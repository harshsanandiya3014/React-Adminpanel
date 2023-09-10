import React ,{useEffect,useState}  from 'react'
import Navbar from '../Components/Navbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from 'react-router-dom'
import Api from '../Api/Api'


export default function Updateproduct() {
   let params = useParams()  
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
    
   
  }


  useEffect(() => {
   getData()
   
  }, [])
  
  return ( 
    <div>
    <Navbar/>
    <div className="content">
      <Navbar/>
      {updatepro?<Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" 
          value={updatepro.name}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Brand" name="brand" value={updatepro.Brand}  />
        </Form.Group>

        <Button variant="primary" type="button" onClick={update1}>
        Update
        </Button>
      </Form> :<h2>Nothing</h2> }
    </div>
  </div>

    
  )
}
