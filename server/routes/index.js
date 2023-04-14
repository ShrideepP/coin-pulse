import express from 'express';
import { getMarketInfo, getCoinsList, getCoinDetails, getCoinDescription } from '../controllers/index.js';

const router = express.Router();

router.get('/market-info', getMarketInfo);

router.get('/cryptocurrencies', getCoinsList);

router.get('/cryptocurrency/details', getCoinDetails);

router.get('/cryptocurrency/details/description', getCoinDescription);

export default router;