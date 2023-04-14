import { CurrentInfoProps } from "./Type";
import { HiOutlineShare, HiOutlineBell, HiOutlineStar } from 'react-icons/hi';
import { formatter } from "../../constants";

const CurrentInfo = ({ id, name, desc, price, total_supply, max_supply, volume_24h, market_cap, market_cap_dominance } : CurrentInfoProps) => {

    const colOneData = [
        { text: 'Price', num: price },
        { text: 'Total Supply', num: total_supply },
        { text: 'Max Supply', num: max_supply },
    ];

    const colTwoData = [
        { text: 'Volume 24h', num: volume_24h ? formatter.format(volume_24h) : '-' },
        { text: 'Market Cap', num: market_cap ? formatter.format(market_cap) : '-' },
        { text: 'Market Cap Dominance', num: market_cap_dominance ? market_cap_dominance.toFixed(2) + '%' : '-' },
    ];

    return (
        <div className="w-full h-fit space-y-6">
            <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-x-[.8rem]">
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`} alt={ name + ' icon' } className="w-10 h-10 object-cover" />
                    <span className="text-2xl text-dominant dark:text-dark-dominant font-bold">
                        { name }
                    </span>
                </h2>
                <div className="flex items-center gap-x-2">
                    <button className="w-12 h-8 grid place-items-center border border-secondary dark:border-dark-secondary rounded">
                        <HiOutlineShare className="text-base text-compliment dark:text-dark-compliment"  />
                    </button>
                    <button className="w-12 h-8 grid place-items-center border border-secondary dark:border-dark-secondary rounded">
                        <HiOutlineBell className="text-base text-compliment dark:text-dark-compliment"  />
                    </button>
                    <button className="w-12 h-8 grid place-items-center border border-secondary dark:border-dark-secondary rounded">
                        <HiOutlineStar className="text-base text-compliment dark:text-dark-compliment"  />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-x-6">
                <div>
                    {colOneData.map(data => (
                        <div key={data.text} className="py-4 flex items-center justify-between border-b border-secondary dark:border-dark-secondary">
                            <span className="text-xs text-compliment dark:text-dark-compliment font-normal">
                                { data.text }
                            </span>
                            <span className="text-xs text-dominant dark:text-dark-dominant font-medium">
                                { data.num ? formatter.format(data.num) : '-' }
                            </span>
                        </div>
                    ))}
                </div>
                <div>
                    {colTwoData.map(data => (
                        <div key={data.text} className="py-4 flex items-center justify-between border-b border-secondary dark:border-dark-secondary">
                            <span className="text-xs text-compliment dark:text-dark-compliment font-normal">
                                { data.text }
                            </span>
                            <span className="text-xs text-dominant dark:text-dark-dominant font-medium">
                                { data.num }
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className="text-sm text-compliment dark:text-dark-compliment font-normal leading-relaxed">
                    { desc }
                </p>
            </div>
        </div>
    );

};

export default CurrentInfo;