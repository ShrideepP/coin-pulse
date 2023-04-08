import { MarketCardProps } from "./Type";

const MarketInfoCard = ({ amount, subTitle }: MarketCardProps) => {
    return (
        <div className="w-full h-full relative px-8 py-4 space-y-2 overflow-hidden bg-primary dark:bg-dark-primary border border-secondary dark:border-dark-secondary rounded">
            <h3 className='text-lg text-dominant dark:text-dark-dominant font-semibold'>
                { amount }
            </h3>
            <span className='text-sm text-compliment dark:text-dark-compliment font-normal'>
                { subTitle }
            </span>
        </div>
    );
};

export default MarketInfoCard;