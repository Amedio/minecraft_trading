import { React } from 'react';

import './table.css';

const Table = ({ type, ...props }) => {
    return <div>
        <img class='table-image' src={`${process.env.PUBLIC_URL}/images/table/${type}.png`} alt='Villager base plains' />
    </div>;
}

export default Table;