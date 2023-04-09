import MarketInfo from "../components/home/MarketInfo";
import Filters from "../components/home/Filters";
import Pagination from "../components/home/Pagination";

const HomePage = () => {
    return (
        <div className="w-full h-fit spaceX">
            <MarketInfo />
            <Filters />
            <Pagination />
        </div>
    );
};

export default HomePage;