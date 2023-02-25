import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from '../const/const';
import { getData } from '../get_data/get_data';
import { updatePosts, updateUserId, updateAlbums } from '../store/slice/data';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { ListItem } from './list_item/list_item';
import './user_list.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function UserList() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const users = useSelector((store) => store.dataPlaceholder.users);
    const dispatch = useDispatch();

    const userId = useSelector((store) => store.dataPlaceholder.userId);
    let albums = useSelector((store) => store.dataPlaceholder.albums);
    albums = albums.filter((album) => album.userId === userId);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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
                                openModal();
                            }}
                        >
                            Albums
                        </button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            style={customStyles}
                            closeTimeoutMS={200}
                            contentLabel="Example Modal"
                            ariaHideApp={false}
                        >
                            <ul className="list">
                                {albums.map((item) => (
                                    <ListItem item={item} key={item.id} />
                                ))}
                            </ul>
                            <button type="button" onClick={closeModal}>
                                close
                            </button>
                        </Modal>
                    </div>
                </div>
            ))}
        </div>
    );
}

import React from 'react';

const data = [
    // ... data from the question
];

export default UserList;

export { UserList };
