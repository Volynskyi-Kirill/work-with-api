import { createBrowserRouter } from 'react-router-dom';
import { Root } from './elements/root/root';
import App from '../App';
import { Posts } from './elements/posts/posts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <App /> },
            {
                path: 'users',
                element: <App />,
            },
            {
                path: 'posts',
                element: <Posts />,
            },
        ],
    },
]);

export { router };
