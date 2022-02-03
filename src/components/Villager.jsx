import { React } from 'react';

import './villager.css';

const Villager = ({ type, ...props }) => {
    return <div>
        <img class='avatar' src={`${process.env.PUBLIC_URL}/images/villager/plains/${type}.png`} alt='Villager base plains' />
    </div>;
}

export default Villager;