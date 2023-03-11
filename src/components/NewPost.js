import React, { useState } from "react";
import "./NewPost.css";

const NewPost = (props) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const postData = {
      id: Math.random(),
      body: enteredBody,
      name: enteredName,
    };
    props.onAddPost(postData);
    props.onCancel();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          required
          rows={3}
          onChange={nameChangeHandler}
        />
      </p>
      <p>
        <button className="btn-cancel" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="btn-submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
