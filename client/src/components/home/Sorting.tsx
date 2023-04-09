import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { SORTING_OPTIONS } from '../../constants';

const Sorting = () => {

    const Data = useContext(DataContext);

    return (
        <div className={`w-full ${Data?.toggleSorting ? 'max-h-[100vh]' : 'max-h-[0]'} md:hidden spaceX fixed bottom-0 left-0 overflow-hidden border-t border-secondary dark:border-dark-secondary bg-primary dark:bg-dark-primary`}>
            <div className='py-4 border-b border-secondary dark:border-dark-secondary'>
                <span className='text-xs text-dominant dark:text-dark-dominant font-semibold'>
                    SORT BY
                </span>
            </div>
            <div>
                {SORTING_OPTIONS.map(option => (
                    <button 
                        key={option} 
                        type='button'
                        onClick={event => {if(Data?.handleSorting) Data.handleSorting(event), Data.setToggleSorting(false)}} 
                        className={`w-full px-4 py-[.75rem] text-xs text-start ${Data?.sorting === option ? 'text-accent' : 'text-compliment dark:text-dark-compliment'} font-medium`}
                    >
                        { option }
                    </button>
                ))}
            </div>
        </div>
    );

};

export default Sorting;