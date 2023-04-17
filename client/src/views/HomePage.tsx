import { useContext, Suspense } from 'react';
import MarketInfo from "../components/home/MarketInfo";
import Loading from "../components/other/Loading";
import Data from "../components/home/Data";
import Sorting from '../components/home/Sorting';
import { DataContext } from '../context/DataContext';

const HomePage = () => {

    const Context = useContext(DataContext);

    return (
        <div className="w-full h-fit spaceX">
            <MarketInfo />
            {Context?.loading ? (
                <Suspense fallback={<Loading />}>
                    <Data />
                </Suspense>
            ) : (
                <Loading />
            )}
            {Context?.data && <Sorting />}
        </div>
    );

};

export default HomePage;