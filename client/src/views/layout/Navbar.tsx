import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TbMoon, TbSun } from 'react-icons/tb';

const Navbar = () => {
    
    const Theme = useContext(ThemeContext);

    const modeElement = Theme?.mode === 'dark' ? <TbSun /> : <TbMoon />;
    
    return (
        <nav className="w-full spaceX space-Y min-h-[10vh] flex items-center justify-between space-y-2">
            <h1 className="text-xl text-dominant dark:text-dark-dominant font-extrabold uppercase">
                Coin Pulse
            </h1>
            <div className="flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
                <button type="button" onClick={Theme?.toggleMode} className="text-xl text-dominant dark:text-dark-dominant">
                    { modeElement }
                </button>
                <a href="" target="_blank">
                    <button className="px-6 py-3 text-xs text-white font-bold tracking-wider uppercase bg-accent-dark hover:bg-accent rounded-sm">
                        GitHub Repo
                    </button>
                </a>
            </div>
        </nav>
    );
    
};

export default Navbar;