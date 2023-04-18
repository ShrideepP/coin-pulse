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

    const [coinDesc, setCoinDesc] = useState<string | null>('');

    const [loading, setLoading] = useState(false);

    const fetchCoinDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/cryptocurrency/details?id=${coinId}`);
            if(coinId) {
                const JSON = response.data.data[coinId];
                setCryptoDetails(JSON);
                setLoading(true);
            };
        } catch (error) {
            setLoading(true);
            console.log(error);
        };
    };

    const fetchCoinDesc = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/api/cryptocurrency/coin/description?id=${coinId}`);
            if(coinId) {
                const JSON = response.data.data[coinId];
                setCoinDesc(JSON.description);
                setLoading(true);
            } 
        } catch (error) {
            setLoading(true);
            console.log(error);
        };
    };

    useEffect(() => {
        fetchCoinDetails();
        fetchCoinDesc();
    }, []);

    return (
        <div className='w-full h-fit spaceX'>
            {(loading && cryptoDetails && coinDesc) ? (
                <Suspense fallback={<Loading />}>
                    <Data data={cryptoDetails} desc={coinDesc} />
                </Suspense>
            ) : (
                <Loading />
            )}
        </div>
    );

};

export default DetailsPage;