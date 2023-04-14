import { HeaderProps } from "./Type";
import { Link } from "react-router-dom";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

const Header = ({ name, symbol, cmc_rank }: HeaderProps) => {
    return (
        <div className="w-full h-fit spaceY flex justify-between items-center border-b border-secondary dark:border-dark-secondary">
            <div className="flex items-center gap-x-4">
                <Link to='/'>
                    <button className="w-9 h-9 grid place-items-center bg-accent hover:bg-accent-dark rounded-sm">
                        <GoChevronLeft className="text-sm text-white" />
                    </button>
                </Link>
                <button className="h-9 px-6 flex items-center border border-secondary dark:border-dark-secondary bg-primary dark:bg-dark-primary rounded-sm">
                    <span className="text-xs text-dominant dark:text-dark-dominant font-semibold">
                        Rank { '#' + cmc_rank }
                    </span>
                </button>
                <span className="text-sm text-dominant dark:text-dark-dominant font-medium">
                    { symbol }
                </span>
            </div>
            <div className="hidden md:flex items-center gap-x-2 text-xs text-dominant dark:text-dark-dominant font-semibold tracking-wide uppercase">
                <span>Coins</span>
                <GoChevronRight className="text-accent text-lg" />
                <span>{ name }</span>
            </div>
        </div>
    );
};

export default Header;