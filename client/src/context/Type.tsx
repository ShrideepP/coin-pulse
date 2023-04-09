export interface ContextProviderProps {
    children: React.ReactElement;
};

export interface ThemeContextValue {
    mode: String;
    toggleMode: () => void;
};

export interface DataContextValue {
    sorting: string;
    handleSorting: (event: React.MouseEvent<HTMLLIElement>) => void;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchResults: { id: string, name: string }[] | [];
    handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    currentPage: number;
    pageNums: number[];
    nextPage: () => void;
    prevPage: () => void;
    handlePageNumClick: (pageNum: number) => void;
};

export interface Data {
    id: number;
    name: string;
    total_supply: number | null;
    cmc_rank: number;
    quote: {
        USD: {
            price: number | null;
            percent_change_1h: number | null;
            percent_change_24h: number | null;
            percent_change_7d: number | null;
            market_cap: number | null;
            volume_24h: number | null;
        };
    };
};