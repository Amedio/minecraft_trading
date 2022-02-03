import { React } from 'react';

import './tradingList.css';

const Table = ({ items, ...props }) => {
    return <div>
        {
            items.map((item, iItem) => {
                <TradingListItem give={item.give} take={item.take} />
            })
        }
    </div>;
}

export default Table;