export interface ContextProviderProps {
    children: React.ReactElement;
};

export interface ThemeContextValue {
    mode: String;
    toggleMode: () => void;
};

export interface DataContextValue {
    currentPage: number;
    pageNums: number[];
    nextPage: () => void;
    prevPage: () => void;
    handlePageNumClick: (pageNum: number) => void;
};