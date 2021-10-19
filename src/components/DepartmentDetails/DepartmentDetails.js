import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DepartmentDetails = () => {
  const { deptId } = useParams();
  const [departments, setDepartments] = useState({});

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahi6086/FAKE-DATA/main/Services.JSON"
    )
      .then((res) => res.json())
      .then((data) => {
        const details = data.find((dp) => dp?.id == deptId);
        setDepartments(details);
      });
  }, []);
  return (
    <div className="container mt-5">
      <div>
        <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
          How we help
        </h4>
        <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
          Departments & Services
        </h1>
        <p className="text-black-50 text-center mb-4">
          Our mainly has Cardiology Department, Gastroenteriogy Department,
          Neurology Department, Detal, Orthopedics Department & Medicine
          Department.
        </p>
      </div>
      <div className="row mt-5 mx-5">
        <div className="col col-sm-12 col-md-6">
          <img className="rounded-3 img-fluid" src={departments?.img} alt="" />
        </div>
        <div style={{ marginTop: "140px" }} className="col col-sm-12 col-md-6">
          <h1>{departments?.tittle}</h1>
          <p className="text-justify">{departments?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
