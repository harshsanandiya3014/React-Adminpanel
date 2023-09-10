import React from "react";

export default function Userdata() {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
        <i className="fa fa-chart-area fa-3x text-primary"></i>
        <div className="ms-3">
          <p className="mb-2">User</p>
          <h6 className="mb-0">$1234</h6>
        </div>
      </div>
    </div>
  );
}
