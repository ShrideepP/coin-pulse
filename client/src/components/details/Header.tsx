import { HeaderProps } from "./Type";
import { GoChevronRight } from 'react-icons/go';

const Header = ({ name, symbol, cmc_rank }: HeaderProps) => {
    return (
        <div className="w-full h-fit spaceY flex justify-between items-center border-b border-secondary dark:border-dark-secondary">
            <div className="flex items-center gap-x-4">
                <button className="h-10 px-6 flex items-center border border-secondary dark:border-dark-secondary bg-primary dark:bg-dark-primary rounded-sm">
                    <span className="text-xs text-dominant dark:text-dark-dominant font-semibold">
                        Rank { '#' + cmc_rank }
                    </span>
                </button>
                <span className="text-sm text-dominant dark:text-dark-dominant font-medium">
                    { symbol }
                </span>
            </div>
            <div className="flex items-center gap-x-2 text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wide uppercase">
                <span>Coins</span>
                <GoChevronRight className="text-accent text-lg" />
                <span>{ name }</span>
            </div>
        </div>
    );
};

export default Header;