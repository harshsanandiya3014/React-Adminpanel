// import logo from './logo.svg';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
// import Main from './Components/Main';
// import Product from './Components/Product';
import Sidebar from './Components/Sidebar';
// import Add from './Pages/AddProduct';


import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ShowCategory from './Pages/ShowCategory';
import Addcategory from './Pages/Addcategory'

import ShowUsers from './Pages/ShowUsers';
import AddUsers from './Pages/AddUsers'

import AddProduct from './Pages/AddProduct';
import ShowProduct from './Pages/ShowProduct'
import ShowReview from './Pages/ShowReview';
import AddReview from './Pages/AddReview';
import Updateproduct from './Pages/Updateproduct';
import Updatecategory from './Pages/Updatecategory';
import Updateuser from './Pages/Updateuser';
import Updatereview from './Pages/Updatereview';
import Login from './Components/Login';
// import Main from './Components/Main';

function App() {
  return (
   
    
   
    <>
   
 
    <BrowserRouter>
    <Sidebar/>
    {/* <Login/> */}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dash' element={<Dashboard/>}/>     
        
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/showproduct' element={<ShowProduct/>}/>
        <Route path='update/:id' element={<Updateproduct/>}/>


        <Route path='/showcategory' element={<ShowCategory/>}/>
        <Route path='/addcategory' element={<Addcategory/>}/>
        <Route path='catupdate/:id' element={<Updatecategory/>}/>

        <Route path='/showusers' element={<ShowUsers/>}/>
        <Route path='/addusers' element={<AddUsers/>}/>
        <Route path='userupdate/:id' element={<Updateuser/>}/>

        <Route path='/showreview' element={<ShowReview/>}/>
        <Route path='/addreview' element={<AddReview/>}/>
        <Route path='reviewupdate/:id' element={<Updatereview/> }/>


       </Routes>
     
     
    </BrowserRouter>
    
    </>
  );
}

export default App;
