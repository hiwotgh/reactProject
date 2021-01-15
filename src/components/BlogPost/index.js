import React from "react";
import "./style.css";
import Card from "../UI/Card";

const BlogPost = (props) => {
  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span blogCategory>Featured</span>
          <h1 className="postTitle">Beautiful is always beautiful</h1>
          <span className="postedBy">posted on January 15, 2021 by Hiwot </span>
        </div>
        <div className="postimageContainer">
          <img
            src={require("../../blogPostImages/memories-from.jpg")}
            alt="Post image"
          />
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
