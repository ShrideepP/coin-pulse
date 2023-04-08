export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const BACKEND_URL = import.meta.env.VITE_REACT_BACKEND_URL;

export const RESULTS_PER_PAGE = 100;

export const SORTING_OPTIONS = ['Market Cap', 'Volume 24h', 'Percent Change 1h', 'Percent Change 24h', 'Percent Change 7d']