import { useDispatch, useSelector } from 'react-redux';
import { API, STORAGE } from '../const/const';
import { getData } from '../get_data/get_data';
import { updatePosts, updateUserId, updateAlbums } from '../store/slice/data';
import { changeModalStatus } from '../store/slice/modal';
import { Link } from 'react-router-dom';
import './user_list.css';

function UserList() {
    const users = useSelector((store) => store.dataPlaceholder.users);
    const dispatch = useDispatch();

    return (
        <div className="container">
            {users.map((user) => (
                <div className="user-card" key={user.id}>
                    <h2>{user.name}</h2>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Website: {user.website}</p>
                    <p>Company: {user.company.name}</p>
                    <p>
                        Address: {user.address.street}, {user.address.suite},{' '}
                        {user.address.city} {user.address.zipcode}
                    </p>
                    <p>
                        Latitude: {user.address.geo.lat}, Longitude:{' '}
                        {user.address.geo.lng}
                    </p>
                    <div className="buttons-container">
                        <Link
                            to="posts"
                            className="link-posts"
                            onClick={async () => {
                                const posts = await getData(API.POSTS);
                                dispatch(updatePosts(posts));
                                dispatch(updateUserId(user.id));
                                localStorage.setItem(
                                    STORAGE.POSTS,
                                    JSON.stringify(posts)
                                );
                                localStorage.setItem(
                                    STORAGE.USER_ID,
                                    JSON.stringify(user.id)
                                );
                            }}
                        >
                            Posts
                        </Link>
                        <button
                            type="button"
                            className="button-albums"
                            onClick={async () => {
                                const album = await getData(API.ALBUMS);
                                dispatch(updateAlbums(album));
                                dispatch(updateUserId(user.id));
                                dispatch(changeModalStatus(true));
                            }}
                        >
                            Albums
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export { UserList };
