import styles from "./Post.module.css";

// function names have to start w/ capital letter. This is bcoz when we use this function in some component like
// return <Post />; then the capital letter tells react that this is a custom component. Otherwise, if we use
// return <post />; then react will assume that this is a default component like <h1>
function Post({ author, body } = props) {
  return (
    // inline styles
    // <div style={{ color: "red", textAlign: "left" }}>
    <div className={styles.post}>
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{body}</p>
    </div>
  );
}

export default Post;
