import { useState, useEffect, useContext } from 'react';
import MarketInfoCard from './MarketInfoCard';
import axios from 'axios';
import { DataContext } from '../../context/DataContext';
import { Divide as Hamburger } from 'hamburger-react';
import { BACKEND_URL, formatter } from '../../constants';

const MarketInfo = () => {

    const Data = useContext(DataContext);

    const [toggle, setToggle] = useState(true);

    const [marketInfo, setMarketInfo] = useState({
        totalCryptoCurrencies: 0,
        totalMarketCap: 0,
        bitcoinDominance: 0,
        totalVolume24h: 0,
    });

    const handleToggle = () => setToggle(!toggle);

    const fetchData = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/market-info`);
            const JSON = response.data;
            setMarketInfo({
                ...marketInfo,
                totalCryptoCurrencies: JSON.data.total_cryptocurrencies,
                totalMarketCap: JSON.data.quote.USD.total_market_cap,
                bitcoinDominance: JSON.data.btc_dominance,
                totalVolume24h: JSON.data.quote.USD.total_volume_24h,
            });
        } catch (error) {
            console.log(error)
        };
    };

    useEffect(() => {
        fetchData();
    }, []);

    const cryptoCurrencies = marketInfo.totalCryptoCurrencies.toLocaleString('en-US');

    const marketCap = formatter.format(marketInfo.totalMarketCap);

    const volume24h = formatter.format(marketInfo.totalVolume24h);

    const bitcoinDominance = marketInfo.bitcoinDominance.toFixed(2) + '%';

    return (
        <section className="w-full h-fit spaceY space-y-4 md:space-y-6 border-b border-secondary dark:border-dark-secondary">
            <div className="flex justify-between items-center">
                <div className='flex items-center gap-x-4'>
                    <button onClick={handleToggle} className={`w-10 h-5 relative ${toggle?'bg-accent':'bg-primary dark:bg-dark-primary'} border border-secondary dark:border-dark-secondary rounded-full`}>
                        <span className={`w-[.8rem] h-[.8rem] absolute top-2/4 ${!toggle?'left-[5%] bg-compliment dark:bg-dark-compliment':'left-[60%] bg-white'} -translate-y-2/4 rounded-full`}></span>
                    </button>
                    <span className='text-sm text-compliment dark:text-dark-compliment font-medium'>Show Stats</span>
                </div>
                <div className='flex md:hidden items-center gap-x-2'>
                    <span className='text-sm text-compliment dark:text-dark-compliment font-medium tracking-wide uppercase'>Sort</span>
                    <button>
                        <Hamburger 
                            size={22} 
                            toggled={Data?.toggleSorting} 
                            toggle={Data?.setToggleSorting} 
                            color='#2196F3' 
                        />
                    </button>
                </div>
            </div>
            {toggle && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
                    <MarketInfoCard amount={cryptoCurrencies} subTitle='Total Crypto Currencies' />
                    <MarketInfoCard amount={String(marketCap)} subTitle='Total Market Cap' />
                    <MarketInfoCard amount={String(volume24h)} subTitle='24h Total Volume' />
                    <MarketInfoCard amount={bitcoinDominance} subTitle='Bitcoin Market Dominance' />
                </div>
            )}
        </section>
    );

};

export default MarketInfo;