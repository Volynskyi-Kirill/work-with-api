import { Normalize } from 'styled-normalize';
import { useSelector } from 'react-redux';
import { PostCard } from './post_card/post_card';
import './posts.css';

function Posts() {
    let posts = useSelector((store) => store.dataPlaceholder.posts);
    const userId = useSelector((store) => store.dataPlaceholder.userId);

    posts = posts.filter((post) => post.userId === userId);

    return (
        <>
            <Normalize />
            <div className="app-container">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </>
    );
}

export { Posts };
