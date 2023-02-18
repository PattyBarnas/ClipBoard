import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import "./PostList.css";
import Modal from "./Modal";
import { uuid } from "uuid";

const PostList = (props) => {
  const [posts, setPosts] = useState([
    { id: "p1", body: "Go over React Hooks", name: "Patryk" },
    { id: "p2", body: "Update resume", name: "Bart" },
    { id: "p3", body: "Apply for work", name: "Mitch" },
  ]);

  function addPostHandler(postData) {
    setPosts((prevState) => [postData, ...prevState]);
  }
  const deleteHandler = (id) => {
    setPosts((prevState) => {
      const updatedList = prevState.filter((post) => post.id !== id);
      return updatedList;
    });
  };

  return (
    <>
      {props.isPosting && (
        <Modal onClose={props.onStopPosting}>
          <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className="list-Posts">
          {posts.map((post, i) => (
            <Post
              key={Math.random()}
              id={post.id}
              text={post.body}
              name={post.name}
              onDelete={deleteHandler}
              editPost={props.editPostHandler}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Maybe add one? :)</p>
        </div>
      )}
    </>
  );
};

export default PostList;
