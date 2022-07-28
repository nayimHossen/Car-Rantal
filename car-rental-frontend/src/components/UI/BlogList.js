import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import blogData from "../../assets/data/blogData";
import "../../styles/Blog-item.css";

const BlogList = () => (
  <>
    {blogData.map((item) => (
      <BlogItem item={item} key={item.id} />
    ))}
  </>
);

const BlogItem = ({ item }) => {
  const {
    imgUrl, title, author, date, description, time
  } = item;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="blog-item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog-info p-3">
          <Link to={`/blogs/${title}`} className="blog-title">
            {title}
          </Link>
          <p className="section-description mt-3">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`} className="read-more">
            Read More
          </Link>

          <div className="blog-time pt-3 mt-3 d-flex align-items-center justify-content-between">
            <span className="blog-author">
              <i className="ri-user-line" />
              {" "}
              {author}
            </span>

            <div className=" d-flex align-items-center gap-3">
              <span className=" d-flex align-items-center gap-1 section-description">
                <i className="ri-calendar-line" />
                {" "}
                {date}
              </span>

              <span className=" d-flex align-items-center gap-1 section-description">
                <i className="ri-time-line" />
                {" "}
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
