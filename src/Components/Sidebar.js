import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div>
       <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <a href="./" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: "40px", height: "40px"}}/>
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <a href="./" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='product'><i className="fa fa-laptop me-2"></i>Product
                        
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="addproduct" className="dropdown-item">Add Product</Link>
                            <Link to="showproduct" className="dropdown-item">Show Product</Link>
                           
                           
                        </div>
                       
                    </div>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='product'><i className="fa fa-laptop me-2"></i>Category
                        
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                           
                            <Link to="addcategory" className="dropdown-item">Add Category</Link>
                            <Link to="showcategory" className="dropdown-item">Show Category</Link>
                            
                        </div>
                       
                    </div>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='product'><i className="fa fa-laptop me-2"></i>Users
                        
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                           
                            <Link to="addusers" className="dropdown-item">Add Users</Link>
                            <Link to="showusers" className="dropdown-item">Show Users</Link>
                           
                        </div>
                       
                    </div>
                    <div className="nav-item dropdown">
                        <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='product'><i className="fa fa-laptop me-2"></i>Review
                        
                        </Link>
                        <div className="dropdown-menu bg-transparent border-0">
                           
                            
                            <Link to="addreview" className="dropdown-item">Add Review</Link>
                            <Link to="showreview" className="dropdown-item">Show Review</Link>
                        </div>
                       
                    </div>
                    
                  
                    
                </div>
            </nav>
        </div>
    </div>
  )
}
