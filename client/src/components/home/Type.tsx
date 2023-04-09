export interface MarketCardProps {
    amount: undefined | string;
    subTitle: String;
};

export interface SelectBoxProps {
    selected: string | undefined;
    handleSelect: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    options: string[];
};

export interface DataRowProps {
    id: number;
    name: string;
    total_supply: number | null;
    cmc_rank: number;
    price: number | null;
    percent_change_1h: number | null;
    percent_change_24h: number | null;
    percent_change_7d: number | null;
    market_cap: number | null;
    volume_24h: number | null;
};