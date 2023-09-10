import React,{useEffect,useState} from "react";
import Api from "../Api/Api";

export default function Productdata() {

const [productget, setproductget] = useState(0)


let getdata = (endpoint) => {
  console.log("start");
  Api.fetchData('products').then((result) => {
    //console.log(result);
    setproductget(result.length)
  });
}

useEffect(() => {
  getdata()
  console.log("done")
}, [])



  return (
   
      
        <div className="col-sm-6 col-xl-3">
          <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
            <i className="fa fa-chart-line fa-3x text-primary"></i>
            <div className="ms-3">
              <p className="mb-2">Product</p>

              <h6 className="mb-0">{productget}</h6>
              
            </div>
          </div>
        </div>
     
  
  );
}
