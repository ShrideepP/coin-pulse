import { useState, useContext } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { SelectBoxProps } from './Type';

const SelectBox = ({ selected, handleSelect, options }: SelectBoxProps) => {

    const [toggle, setToggle] = useState(false);

    const handleBtnClick = () => setToggle(!toggle);

    const close = () => setToggle(false);

    const handleOnMouseEnter = () => setToggle(true);

    const handleOnMouseLeave = () => setToggle(false);

    return (
        <div 
            onMouseEnter={handleOnMouseEnter} 
            onMouseLeave={handleOnMouseLeave}
            className='w-fit h-full relative flex items-center'
        >
            <button 
                onClick={handleBtnClick}
                className='w-fit h-[2.4rem] px-4 text-compliment dark:text-dark-compliment hover:text-dominant dark:hover:text-dark-dominant flex items-center gap-x-6 lg:gap-x-8 border border-secondary dark:border-dark-secondary bg-primary dark:bg-dark-primary rounded-sm'
            >
                <span className={`text-xs ${toggle && 'text-dominant dark:text-dark-dominant'} font-medium`}>
                    { selected }
                </span>
                <AiFillCaretDown className={`text-xs ${toggle && 'text-accent rotate-180'}`}/>
            </button>
            {toggle && (
                <div className={`min-w-full max-w-fit flex flex-col absolute top-full left-2/4 -translate-x-2/4 overflow-hidden text-xs text-compliment dark:text-dark-compliment font-medium bg-primary dark:bg-dark-primary border-x border-x-secondary dark:border-x-dark-secondary border-b border-b-secondary dark:border-b-dark-secondary border-t-2 ${selected && 'border-t-accent'} whitespace-nowrap rounded-sm`}>
                    {options.map(option => (
                        <button 
                            key={option} 
                            onClick={event => {if(handleSelect) handleSelect(event), close()}} 
                            className='px-4 py-2 text-start hover:text-dominant dark:hover:text-dark-dominant hover:bg-background dark:hover:bg-dark-background cursor-pointer'
                        >
                            { option }
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
    
};

export default SelectBox;