import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoCoinDetails } from './Type';
import Loading from '../components/other/Loading';
import Data from '../components/details/Data';
import axios from 'axios';

const DetailsPage = () => {

    const params = useParams();

    const { coinId } = params;

    const [cryptoDetails, setCryptoDetails] = useState<CryptoCoinDetails | null>(null);

    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/api/cryptocurrency/details?id=${coinId}`);
        if(coinId) {
            const JSON = response.data.data[coinId];
            setCryptoDetails(JSON);
            setLoading(true);
        };
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='w-full h-fit spaceX'>
            {(loading && cryptoDetails) ? (
                <Suspense fallback={<Loading />}>
                    <Data data={cryptoDetails} />
                </Suspense>
            ) : (
                <Loading />
            )}
        </div>
    );

};

export default DetailsPage;