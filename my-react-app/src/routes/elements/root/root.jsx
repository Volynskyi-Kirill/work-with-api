import { Outlet } from 'react-router-dom';
import "./root.css"

function Root() {
    return (
        <>
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
