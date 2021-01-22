import React from "react";
import Card from "../../components/UI/Card";
import BlogPost from "../../components/BlogPost";
import Sidebar from "../../components/Sidebar";
import "./style.css";

const Post = (props) => {
  console.log(props);

  return (
    <section className="container">
      <BlogPost />
      <Sidebar />
    </section>
  );
};
export default Post;
