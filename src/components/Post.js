import React, { useState } from "react";
import "./Post.css";

const Post = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [textBody, setTextBody] = useState(props.text);

  const deletePost = () => {
    console.log(props.id);
    return props.onDelete(props.id);
  };
  const onEdit = () => {
    setIsEditing(!isEditing);
    console.log("clicked");
  };
  const editOnChange = (e) => {
    setTextBody(e.target.value);
  };
  const editDone = (e) => {
    setIsEditing(false);
    // setTextBody(e.target.value);
  };

  return (
    <li className="post-card">
      <p className="post-name">{props.name}</p>
      {!isEditing && (
        <p className="post-text" value={textBody}>
          {textBody}
        </p>
      )}
      {isEditing && (
        <input
          className="post-text"
          value={textBody}
          onChange={editOnChange}
        ></input>
      )}

      <button className="btn-delete" onClick={deletePost}>
        Delete
      </button>
      <button className="btn-delete" onClick={onEdit}>
        Edit
      </button>
    </li>
  );
};

export default Post;
