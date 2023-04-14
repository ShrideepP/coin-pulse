import { formatter } from "../../constants";
import { StatisticsProps } from "./Type";


const Statistics = ({ name, symbol, price, total_supply, max_supply, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_30d, percent_change_7d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance } : StatisticsProps) => {

    const marketData = [
        { text: 'Price', num: price ? formatter.format(price) : '-' },
        { text: 'Total Supply', num: total_supply ? formatter.format(total_supply) : '-' },
        { text: 'Max Supply', num: max_supply ? formatter.format(max_supply) : '-' },
        { text: 'Market Cap', num: market_cap ? formatter.format(market_cap) : '-' },
        { text: 'Market Cap Dominance', num: market_cap_dominance ? market_cap_dominance + '%' : '-' },
        { text: 'Volume 24h', num: volume_24h ? formatter.format(volume_24h) : '-' },
        { text: 'Volume Change 24h', num: volume_change_24h ? formatter.format(volume_change_24h) : '-' },
        { text: 'Percent Change 1h', num: percent_change_1h ? percent_change_1h + '%' : '-' },
        { text: 'Percent Change 24h', num: percent_change_24h ? percent_change_24h + '%' : '-' },
        { text: 'Percent Change 7d', num: percent_change_7d ? percent_change_7d + '%' : '-' },
        { text: 'Percent Change 30d', num: percent_change_30d ? percent_change_30d + '%' : '-' },
        { text: 'Percent Change 60d', num: percent_change_60d ? percent_change_60d + '%' : '-' },
        { text: 'Percent Change 90d', num: percent_change_90d ? percent_change_90d + '%' : '-' },
    ];

    return (
        <div className="w-full h-fit space-y-4 innerSpace bg-primary dark:bg-dark-primary rounded">
            <h3 className='text-lg text-compliment dark:text-dark-compliment font-semibold'>
                { symbol } Price Statistics
            </h3>
            <ul>
                {marketData.map(data => (
                    <li key={data.text} className="py-4 flex items-center justify-between border-b border-secondary dark:border-dark-secondary">
                        <span className="text-xs text-compliment dark:text-dark-compliment font-normal">
                            { data.text }
                        </span>
                        <span className="text-xs text-dominant dark:text-dark-dominant font-medium">
                            { data.num }
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default Statistics;