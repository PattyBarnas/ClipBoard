import React from "react";
import "./Post.css";

const Post = (props) => {
  const deletePost = () => {
    console.log(props.id);
    return props.onDelete(props.id);
  };

  return (
    <li className="post-card">
      <p className="post-name">{props.name}</p>
      <p className="post-text">{props.text}</p>
      <button className="btn-delete" onClick={deletePost}>
        Delete
      </button>
    </li>
  );
};

export default Post;
