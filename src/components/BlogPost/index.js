import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";
import memories from "../../blogPostImages/memories-from.jpg";
import blogPost from "../../data/blog.json";

const BlogPost = (props) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const postid = props.match.params.postid;
    const post = blogPost.data.find((post) => post.id == postid);
    setPost(post);
  });

  return (
    <div className="blogPostContainer">
      <Card>
        <div className="blogHeader">
          <span blogCategory>Featured</span>
          <h1 className="postTitle">
            {post.blogTitle}Beautiful is always beautiful
          </h1>
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

        <div className="postContent">
          <h3>Post Title</h3>
          <p>loren ipsim</p>
        </div>
      </Card>
    </div>
  );
};

export default BlogPost;
