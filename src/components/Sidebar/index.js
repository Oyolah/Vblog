import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "../UI/Card";

import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

/**
 * @author
 * @function Sidebar
 **/

const Sidebar = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const posts = blogPost.data;
    setPosts(posts);
  }, [posts]);

  return (
    <div
      className="sidebarContainer"
      style={{
        width: props.width
      }}
    >
      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>About Us</span>
        </div>
        <div className="profileImageContainer">
          <img
            src="https://avatars1.githubusercontent.com/u/53017008?s=400&u=550da249a7f7fa780f27ba0167b3ae7a2c81d452&v=4?q=tbn%3AANd9GcRGAb43NxZswWRLw9RoxC8YwykXlLy_efq2r674Xj0ffRR3D-0P"
            alt=""
          />
        </div>
        <div className="cardBody">
          <p className="personalBio">
            My name is Oyolah Mustapha I am a software developer specialization in
            Full Stack Web Development....:)
          </p>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>Social Network</span>
        </div>
      </Card>

      <Card
        style={{
          marginBottom: "20px",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        <div className="cardHeader">
          <span>Recent Posts</span>
        </div>

        <div className="recentPosts">
          {posts.map(post => {
            return (
              <NavLink key={post.id} to={`/post/${post.slug}`}>
                <div className="recentPost">
                  <h3>{post.blogTitle}</h3>
                  <span>{post.postedOn}</span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
