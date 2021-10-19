import React from "react";
import { Link } from "react-router-dom";

const Department = (props) => {
  const { id, img, tittle, description } = props.department;
  return (
    <div>
      <div className="col">
        <div className="card h-100 p-3 shadow service">
          <img
            src={img}
            className="card-img-top rounded-3  mx-auto"
            alt="..."
          />
          <div className="card-body ms-1">
            <h4 className="card-title fw-bolder ">{tittle}</h4>
            <p className="card-text text-black-50">{description}</p>
            <Link to={`/departmentdetails/${id}`}>
              <button
                type="button"
                class="btn btn-outline-info text-center fw-bold"
              >
                View Service
                <span className="fw-bolder fs-4 ms-1 mt-2">+</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
