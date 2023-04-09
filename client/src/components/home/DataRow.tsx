import { Link } from "react-router-dom";
import { DataRowProps } from "./Type";
import { formatter } from "../../constants";

const textColor = (num: number | null) => {
    if(num) {
        return num > 0 ? 'text-green-700 dark:text-green-500' : 'text-red-700 dark:text-red-500';
    }; return 'text-compliment dark:text-dark-compliment';
};

const DataRow = ({ id, name, cmc_rank, price, percent_change_1h, percent_change_24h, percent_change_7d, market_cap, volume_24h, total_supply } : DataRowProps) => {
    return (
        <div className="w-full h-fit px-2 md:px-4 hover:bg-primary dark:hover:bg-dark-primary border-b border-secondary dark:border-dark-secondary">
            <Link to={`/coins/${id}`}>
                <div className="w-full min-h-[8vh] grid grid-cols-6 md:grid-cols-10 lg:grid-cols-14 items-center">
                    <span className="data__row hidden md:block">
                        { cmc_rank }
                    </span>
                    <span className="data__row col-span-2 flex items-center gap-x-2">
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`} alt={ name + ' icon' } className="w-6 h-6 object-cover" />
                        <span className="text-dominant dark:text-dark-dominant">
                            { name }
                        </span>
                    </span>
                    <span className="data__row col-span-2">
                        { price ? formatter.format(price) : '-' }
                    </span>
                    <span className={`text-xs ${textColor(percent_change_1h)} font-medium`}>
                        { percent_change_1h ? percent_change_1h.toFixed(2) + '%' : '-' }
                    </span>
                    <span className={`text-xs ${textColor(percent_change_24h)} font-medium`}>
                        { percent_change_24h ? percent_change_24h.toFixed(2) + '%' : '-' }
                    </span>
                    <span className={`text-xs ${textColor(percent_change_7d)} font-medium hidden md:block`}>
                        { percent_change_7d ? percent_change_7d.toFixed(2) + '%' : '-' }
                    </span>
                    <span className="data__row hidden lg:block col-span-2">
                        {market_cap ? formatter.format(market_cap) : '-'}
                    </span>
                    <span className="data__row hidden lg:block col-span-2">
                        {volume_24h ? formatter.format(volume_24h) : '-'}
                    </span>
                    <span className="data__row hidden md:block col-span-2">
                        {total_supply ? formatter.format(total_supply) : '-'}
                    </span>
                </div>
            </Link>
        </div>
    );
};

export default DataRow;