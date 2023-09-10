import React ,{useEffect,useState}  from 'react'
import Navbar from '../Components/Navbar'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from 'react-router-dom'
import Api from '../Api/Api'

export default function Updatereview() {
  let params = useParams()  
  let navi = useNavigate()
  const [updatereview, setupdatereview] = useState({})

  let getData = () =>{
       console.log(params.id)
      Api.fetchData('Reviews',params.id).then((result)=>{
        console.log("Result is" + JSON.stringify(result)) 
        setupdatereview(result)
        console.log("state change" + JSON.stringify(updatereview))
      })
  }

  let update1 = () => {
    console.log(updatereview) 
    Api.update('Reviews',updatereview.id,updatereview).then((result)=>
    console.log("data updated"));
    navi(`../showreview`)
    //getData()
  }

let reviewchange = (e) => {
  console.log(e.target.value) 
  setupdatereview({...updatereview,[e.target.name]:e.target.value}) 
}

  useEffect(() => {
   getData()
   
  }, [])
  return (
    <div>
  <Navbar/>
    <div className="content">
         {updatereview?<Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" name="name" onChange={reviewchange}
          value={updatereview.name}  />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>category</Form.Label>
          <Form.Control type="surname" placeholder="surname" name="surname" onChange={reviewchange} value={updatereview.surname}  />
        </Form.Group>

        <Button variant="primary" type="button" onClick={update1}>
        Update
        </Button>
      </Form> :<h2>Nothing</h2> }
    </div>
    </div>
  )
}
