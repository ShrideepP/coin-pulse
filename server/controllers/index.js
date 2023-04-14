import axios from 'axios';

export const getMarketInfo = async (req, res) => {
    try {
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest', { 
            headers: {
                'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY,
                'Content-Type': 'application/json',
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const getCoinsList = async (req, res) => {
    try {
        const { limit, start, sort, sort_dir } = req.query;
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            params: {
                limit,
                start,
                sort,
                sort_dir
            }, headers: {
                'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY,
                'Content-Type': 'application/json',
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const getCoinDetails = async (req, res) => {
    try {
        const { id } = req.query;
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', { 
            params: {
                id,
            }, headers: {
                'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY,
                'Content-Type': 'application/json',
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

export const getCoinDescription = async (req, res) => {
    try {
        const { id } = req.query;
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info', {
            params: {
                id,
            }, headers: {
                'X-CMC_PRO_API_KEY': process.env.COIN_MARKET_CAP_API_KEY,
                'Content-Type': 'application/json',
            },
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};