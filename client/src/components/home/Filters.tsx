import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import SearchBar from './SearchBar';
import SelectBox from './SelectBox';
import { BsFilterRight } from 'react-icons/bs';
import { SORTING_OPTIONS } from '../../constants';

const Filters = () => {
    const Data = useContext(DataContext);
    return (
        <section className="w-full h-[10vh] flex justify-between items-center border-b border-secondary dark:border-dark-secondary">
            <div className="w-fit h-full hidden md:flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
                <div className="flex items-center gap-x-2">
                    <BsFilterRight className='text-2xl text-accent' />
                    <span className='text-xs text-compliment dark:text-dark-compliment font-medium tracking-wide uppercase'>Sort</span>
                </div>
                <div className="w-fit h-full">
                    <SelectBox
                        selected={Data?.sorting}
                        handleSelect={Data?.handleSorting}
                        options={SORTING_OPTIONS}
                    />
                </div>
            </div>
            <div className='w-fit h-full relative flex items-center'>
                <SearchBar />
            </div>
        </section>
    );

};

export default Filters;