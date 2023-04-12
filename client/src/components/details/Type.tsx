import { CryptoCoinDetails } from "../../views/Type";

export interface DataProps {
    data: CryptoCoinDetails;
};

export interface HeaderProps {
    name: string;
    symbol: string;
    cmc_rank: number;
};

export interface CurrentInfoProps {
    name: string;
    price: number | null;
    total_supply: number | null;
    max_supply: number | null;
    volume_24h: number | null,
    volume_change_24h: number | null,
    percent_change_1h: number | null,
    percent_change_24h: number | null,
    percent_change_7d: number | null,
    percent_change_30d: number | null,
    percent_change_60d: number | null,
    percent_change_90d: number | null,
    market_cap: number | null,
    market_cap_dominance: number | null,
};
