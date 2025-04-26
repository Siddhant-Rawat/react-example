// css modules, therefore Post.module.css - so that we can get it as an object. also, it creates a unique classname for each
// css class in Post.module.css (check elements in dev tools)
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

// function names have to start w/ capital letter. This is bcoz when we use this function in some component like
// return <Post />; then the capital letter tells react that this is a custom component. Otherwise, if we use
// return <post />; then react will assume that this is a default component like <h1>
function Post({ id, author, body } = props) {
  return (
    // inline styles
    // <div style={{ color: "red", textAlign: "left" }}>
    <li className={styles.post}>
      <Link to={id}>
        <p className={styles.text}>{body}</p>
        <p className={styles.author}>{author}</p>
      </Link>
    </li>
  );
}

export default Post;
