import { CurrentInfoProps } from "./Type";

const CurrentInfo = ({ name, price, total_supply, max_supply, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance } : CurrentInfoProps) => {
    return (
        <div className="w-full h-fit sectionX sectionY space-y-4 border border-secondary dark:border-dark-secondary rounded-sm"></div>
    );
};

export default CurrentInfo;