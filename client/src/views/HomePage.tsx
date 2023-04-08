import MarketInfo from "../components/home/MarketInfo";
import Pagination from "../components/home/Pagination";

const HomePage = () => {
    return (
        <div className="w-full h-fit spaceX">
            <MarketInfo />
            <Pagination />
        </div>
    );
};

export default HomePage;