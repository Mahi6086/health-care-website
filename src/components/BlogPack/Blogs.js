import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("./Blogs.JSON")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container-md mt-5 mb-5">
      <div>
        <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
          How we help
        </h4>
        <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
          Our Expert Doctors
        </h1>
        <p className="text-black-50 text-center mb-5">
          Our have world class very popular doctors to give services to patients
          Cadiology, Gastroenteriogy, Neurology, Dental, Pulmonology, <br />{" "}
          Medicine, Arthopedics & ensure to give top class qualitiful doctors.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog) => (
            <Blog key={blog.description} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
