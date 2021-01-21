import React from "react";
import "./style.css";
import Card from "../UI/Card";
import memories from "../../blogPostImages/memories-from.jpg";

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
            src={memories}
            alt="Post"
            //src={require("logo192.png")}
            //src={require("../../blogPostImages/memories-from.jpg")}
            //style={{ width: 100, height: 100 }}
            //alt="Post"
          />
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
