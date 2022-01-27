import { React } from 'react';

import './villager.css';

const Villager = (...props) => {
    return <div>
        <img src={process.env.PUBLIC_URL + '/images/villager/plains/base.png'} alt='Villager base plains' />
    </div>;
}

export default Villager;