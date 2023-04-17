import { createContext, useState, useEffect } from 'react'
import { ContextProviderProps, Data, DataContextValue } from './Type';
import axios from 'axios';
import { BACKEND_URL, RESULTS_PER_PAGE, SORTING_OPTIONS } from '../constants';

export const DataContext = createContext<DataContextValue | null>(null);

export const DataProvider = ({ children }: ContextProviderProps) => {

    // data state

    const [data, setData] = useState<Data[] | null>(null);

    const [loading, setLoading] = useState(false);

    // sorting state

    const [sorting, setSorting] = useState<string>(SORTING_OPTIONS[0]);

    // search state

    const [search, setSearch] = useState('');

    const [toggleSorting, setToggleSorting] = useState(false);

    const [searchOptions, setSearchOptions] = useState<{id: string, name: string}[] | []>([]);

    const [searchResults, setSearchResults] = useState<{id: string, name: string}[] | []>([]);

    // pagination state

    const [currentPage, setCurrentPage] = useState(1);

    const [pageNums, setPageNums] = useState([1, 2, 3]);

    const fetchData = async () => {

        const API_END_POINT = new URL(`${BACKEND_URL}/api/cryptocurrencies`);

        API_END_POINT.searchParams.set('start', String(currentPage));

        API_END_POINT.searchParams.set('limit', String(RESULTS_PER_PAGE));

        API_END_POINT.searchParams.set('sort', sorting.toLowerCase().replace(/\s+/g, '_'));

        API_END_POINT.searchParams.set('sort_dir', 'desc');

        try {
            const response = await axios.get(API_END_POINT.href);
            const JSON = response.data;
            setSearchOptions(JSON.data.map((coin: { id: string, name: string }) => {
                return {
                    id: coin.id,
                    name: coin.name.toLowerCase(),
                };
            }));
            setData(JSON.data);
            setLoading(true);
        } catch (error) {
            console.error(error);
            setLoading(true);
        };

    };

    useEffect(() => {
        fetchData();
    }, [currentPage, sorting]);

    // sorting logic

    const handleSorting = (event: React.MouseEvent<HTMLButtonElement>) => {
        const value = event.currentTarget.textContent;
        if(value) {
            setSorting(value);
        };
    };

    // search logic

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.toLowerCase();
        setSearch(value);
        setSearchResults(searchOptions.filter(coin => {
            return coin.name.includes(value);
        }));
    };

    // pagination logic

    const nextPage = () => {
        const newPageNums = pageNums.map(num => num + 1);
        setPageNums(newPageNums);
        setCurrentPage(currentPage + RESULTS_PER_PAGE);
    };
    
    const prevPage = () => {
        if(pageNums[0] > 1) {
            const newPageNums = pageNums.map(num => num - 1);
            setPageNums(newPageNums);
            setCurrentPage(currentPage - RESULTS_PER_PAGE);
        };
    };

    const handlePageNumClick = (pageNum: number) => {
        setCurrentPage((pageNum * RESULTS_PER_PAGE) - 99);
    };
    
    return (
        <DataContext.Provider value={{
            data,
            loading,
            sorting,
            toggleSorting,
            setToggleSorting,
            handleSorting,
            search,
            setSearch,
            searchResults,
            handleSearchChange,
            currentPage,
            pageNums,
            nextPage,
            prevPage,
            handlePageNumClick,
        }}>
            { children }
        </DataContext.Provider>
    );

};