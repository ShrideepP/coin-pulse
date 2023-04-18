import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { TbMoon, TbSun } from 'react-icons/tb';
import { Link } from "react-router-dom";

const Navbar = () => {
    
    const Theme = useContext(ThemeContext);

    const modeElement = Theme?.mode === 'dark' ? <TbSun /> : <TbMoon />;
    
    return (
        <nav className="w-full spaceX space-Y min-h-[10vh] flex items-center justify-between space-y-2">
            <button>
                <Link to='/'>
                    <h1 className="text-xl text-dominant dark:text-dark-dominant font-extrabold uppercase">
                        Coin Pulse
                    </h1>
                </Link>
            </button>
            <div>
                <button type="button" onClick={Theme?.toggleMode} className="text-xl text-dominant dark:text-dark-dominant">
                    { modeElement }
                </button>
            </div>
        </nav>
    );
    
};

export default Navbar;
