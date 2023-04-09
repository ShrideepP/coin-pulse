import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { BsFilterRight } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { SORTING_OPTIONS } from '../../constants';
import SelectBox from './SelectBox';
import SearchResults from './SearchResults';

const Filters = () => {

    const Data = useContext(DataContext);

    return (
        <section className="w-full h-[10vh] flex justify-between items-center border-b border-secondary dark:border-dark-secondary">
            <div className="hidden md:flex items-center gap-x-4 md:gap-x-6 lg:gap-x-8">
                <div className='flex items-center gap-x-2'>
                    <BsFilterRight className='text-2xl text-accent' />
                    <span className='text-xs text-compliment dark:text-dark-compliment font-semibold uppercase tracking-wide'>
                        Filters
                    </span>
                </div>
                <SelectBox
                    selected={Data?.sorting}
                    handleSelect={Data?.handleSorting}
                    options={SORTING_OPTIONS} 
                />
            </div>
            <div className='w-full md:w-[unset] h-full relative flex items-center'>
                <div className="w-full h-10 flex items-center bg-primary dark:bg-dark-primary border border-secondary dark:border-dark-secondary rounded-sm">
                    <input type="search" onChange={Data?.handleSearchChange} placeholder="Search" className="w-full h-full px-4 text-xs text-dominant dark:text-dark-dominant placeholder:text-compliment dark:placeholder:text-dark-compliment font-semibold tracking-wide bg-transparent outline-none" />
                    <button className="w-fit h-full px-4 text-xl text-white bg-accent hover:bg-accent-dark focus:bg-accent-dark">
                        <BiSearch />
                    </button>
                    {Data?.search && <SearchResults />}
                </div>
            </div>
        </section>
    );

};

export default Filters;