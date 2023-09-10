import React, { useEffect, useState } from "react";
import Api from "../Api/Api";
import Table from "react-bootstrap/Table";
import './Table.css'
import { useNavigate } from "react-router-dom";



export default function Tableadmin(props) {
  const [colum, setcolum] = useState();

let navigate = useNavigate()

  let getData = (endpoint) => {
    console.log("fun api start");
    Api.fetchData(endpoint).then((result) => {
      console.log(result);
      setcolum(result);
    });
  };

  let deletedata = (endpoint,id) =>{
    console.log(endpoint,id)
    Api.deleteWork(endpoint,id).then((result)=>{
   let newarr = colum.filter((item)=>item.id!=id)
   setcolum([...newarr])
    })
  }

  let updatedata = (id) => {
    if(props.name == "products")
    {
      navigate(`../update/${id}`)

    }
    else if(props.name == "category")
    {
      navigate(`../catupdate/${id}`)
    }
    else if(props.name == "Reviews")
    {
      navigate(`../reviewupdate/${id}`)
    }
    else if(props.name == "users")
    {
      navigate(`../userupdate/${id}`)
    }
  }

  useEffect(() => {
    console.log(props.name);
    getData(props.name);
    console.log("done...");
  }, []);

  return (
    <div className="content">
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>#</th>
          <th>Name</th>
          <th>Brand</th>
          <th>category</th>
          <th>surname</th> */}

            {colum ? (
              Object.keys(colum[0]).map((item) => <th>{item}</th>)
            ) : (
              <h2>Data Loading</h2>
            )}
          </tr>
        </thead>
        <tbody>
          {/* {colum ? (
            colum.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.surname}</td>
              </tr>
            ))
          ) : (
            <h2>Loading</h2>
          )} */}

          {colum ? (
            colum.map((item) => (
              <tr>
                {Object.values(item).map((value) => (
                 <td>{value}</td>
                ))}
                <td className="btn">
                {/* <FaBackspace /> */}
                <i className="bi bi-archive"   onClick={()=>{deletedata(props.name,item.id)}} /> 

                <i className="bi bi-eyedropper" id="updatebtn" onClick={()=>{updatedata(item.id)}}/>
                </td>
              </tr>
            ))
          ) : (
            <h2>loading</h2>
          )}

        </tbody>
      </Table>
    </div>
  );
}
