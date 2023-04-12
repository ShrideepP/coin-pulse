import CurrentInfo from "./CurrentInfo";
import Header from "./Header";
import { DataProps } from "./Type";
import Masonry from 'react-masonry-css'

const Data = ({ data } : DataProps) => {

    const breakPoints = {
        default: 2,
        1024: 1,
        // 768: 1,
    };

    return (
        <>
            <Header
                name={data.name}
                symbol={data.symbol}
                cmc_rank={data.cmc_rank}
            />
            <section className="w-full h-fit spaceY">
                <Masonry 
                    breakpointCols={breakPoints}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    <CurrentInfo 
                        name={data.name}
                        price={data.quote.USD.price}
                        total_supply={data.total_supply}
                        max_supply={data.max_supply}
                        volume_24h={data.quote.USD.volume_24h}
                        volume_change_24h={data.quote.USD.volume_change_24h}
                        percent_change_1h={data.quote.USD.percent_change_1h}
                        percent_change_24h={data.quote.USD.percent_change_24h}
                        percent_change_7d={data.quote.USD.percent_change_7d}
                        percent_change_30d={data.quote.USD.percent_change_30d}
                        percent_change_60d={data.quote.USD.percent_change_60d}
                        percent_change_90d={data.quote.USD.percent_change_90d}
                        market_cap={data.quote.USD.market_cap}
                        market_cap_dominance={data.quote.USD.market_cap_dominance}
                    />
                </Masonry>
            </section>
        </>
    );

};

export default Data;