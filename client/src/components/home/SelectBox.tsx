import { useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { SelectBoxProps } from "./Type";

const SelectBox = ({ selected, handleSelect, options }: SelectBoxProps) => {

    const [toggle, setToggle] = useState(false);

    const handleBtnClick = () => setToggle(!toggle);

    const close = () => setToggle(false);

    const handleOnMouseEnter = () => setToggle(true);

    const handleOnMouseLeave = () => setToggle(false);

    return (
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} className='w-fit min-h-[10vh] relative flex items-center'>
            <button onClick={handleBtnClick} className='w-fit h-full px-4 text-compliment dark:text-dark-compliment hover:text-dominant dark:hover:text-dark-dominant flex justify-between items-center gap-x-6 lg:gap-x-8'>
                <span className={`text-xs ${toggle && 'text-dominant dark:text-dark-dominant'} font-medium tracking-wider`}>
                    { selected && selected }
                </span>
                <AiFillCaretDown className={`text-xs ${toggle && 'text-accent rotate-180'}`}/>
            </button>
            {toggle && (
                <ul onClick={close} className={`min-w-full max-w-fit absolute top-full left-2/4 -translate-x-2/4 overflow-hidden text-xs text-compliment dark:text-dark-compliment font-medium tracking-wider bg-primary dark:bg-dark-primary border-x border-x-secondary dark:border-x-dark-secondary border-b border-b-secondary dark:border-b-dark-secondary border-t-2 ${selected && 'border-t-accent'} whitespace-nowrap rounded-sm`}>
                    {options.map(option => (
                        <li key={option} onClick={handleSelect} className='px-4 py-2 hover:text-dominant dark:hover:text-dark-dominant hover:bg-background dark:hover:bg-dark-background cursor-pointer'>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );

};

export default SelectBox;