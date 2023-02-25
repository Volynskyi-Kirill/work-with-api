import './list_item.css';

function ListItem({ item }) {
    return (
        <li className="list-item">
            <span className="list-item__title">{item.title}</span>
        </li>
    );
}

export { ListItem };
