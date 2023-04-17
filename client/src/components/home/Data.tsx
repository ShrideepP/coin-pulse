import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import Filters from "./Filters";
import DataHeader from "./DataHeader";
import DataRow from "./DataRow";
import Pagination from './Pagination';

const Data = () => {

    const Context = useContext(DataContext);

    return (
        <>
            <Filters />
            <DataHeader />
            {Context?.data.map(coin => (
                <DataRow
                    key={coin.id}
                    id={coin.id}
                    name={coin.name}
                    cmc_rank={coin.cmc_rank}
                    total_supply={coin.total_supply}
                    price={coin.quote.USD.price}
                    percent_change_1h={coin.quote.USD.percent_change_1h}
                    percent_change_24h={coin.quote.USD.percent_change_24h}
                    percent_change_7d={coin.quote.USD.percent_change_7d}
                    market_cap={coin.quote.USD.market_cap}
                    volume_24h={coin.quote.USD.volume_24h} 
                />
            ))}
            <Pagination />
        </>
    );

};

export default Data;