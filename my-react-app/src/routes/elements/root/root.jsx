import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Modal } from '../../../user_list/modal/modal';
import { ListItem } from '../../../user_list/list_item/list_item';
import './root.css';

function Root() {
    const isActiveAlbums = useSelector((store) => store.modal.albums);

    const userId = useSelector((store) => store.dataPlaceholder.userId);
    let albums = useSelector((store) => store.dataPlaceholder.albums);
    albums = albums.filter((album) => album.userId === userId);

    return (
        <>
            <Modal isActive={isActiveAlbums}>
                <ul className="list">
                    {albums.map((item) => (
                        <ListItem item={item} key={item.id} />
                    ))}
                </ul>
            </Modal>
            <header className="header">
                <a href="/" className="link-users">
                    list of users
                </a>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export { Root };
