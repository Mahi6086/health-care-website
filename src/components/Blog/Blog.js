import React from "react";
import "./Blog.css";
const Blog = (props) => {
  const { img, publishDate_topic, description } = props.blog;
  return (
    <div>
      <div className="col">
        <div className="card h-100 p-3 service blog">
          <img
            src={img}
            className="card-img-top rounded-3 img-fluid mx-auto"
            alt="..."
          />
          <div className="card-body text-center">
            <p className="card-title fw-bolder text-black-50">
              {publishDate_topic}
            </p>
            <h3 className="card-text ">{description}</h3>
            <button type="button" class="btn btn-outline-info">
              Read Full Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
