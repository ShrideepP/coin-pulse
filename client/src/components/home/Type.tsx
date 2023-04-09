export interface MarketCardProps {
    amount: undefined | string;
    subTitle: String;
};

export interface SelectBoxProps {
    selected: string | undefined;
    handleSelect: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    options: string[];
};