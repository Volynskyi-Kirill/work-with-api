function PostCard({ post }) {
    return (
        <div className="post-card">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-body">{post.body}</p>
            <p className="post-user">Posted by User {post.userId}</p>
        </div>
    );
}

export {PostCard}