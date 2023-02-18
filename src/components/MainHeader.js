import { MdPostAdd, MdMessage } from "react-icons/md";
import "./MainHeader.css";

function MainHeader({ onCreatePost }) {
  return (
    <header className="main-header">
      <h1 className="logo">
        <MdMessage />
        ClipBoard
      </h1>
      <p>
        <button className="button" onClick={onCreatePost}>
          <MdPostAdd size={24} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
