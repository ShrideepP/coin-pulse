import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    const Data = useContext(DataContext);
    return (
        <>
            <div className='flex items-center overflow-hidden border border-secondary dark:border-dark-secondary bg-primary dark:bg-dark-primary rounded-sm'>
                <input type="search" onChange={Data?.handleSearchChange} placeholder='Search' className='w-full md:w-56 h-[2.4rem] px-4 text-xs text-dominant dark:text-dark-dominant placeholder:text-compliment dark:placeholder:text-dark-compliment font-medium border-0 outline-none bg-transparent' />
                <button type='button' className='w-fit h-[2.4rem] px-4 flex items-center bg-accent-dark'>
                    <BiSearch className='text-white text-lg' />
                </button>
            </div>
            {Data?.search && (
                <div className='w-full h-fit absolute top-full left-0 border-x border-x-secondary dark:border-x-dark-secondary bg-primary dark:bg-dark-primary border-b border-b-secondary dark:border-b-dark-secondary border-t-2 border-t-accent rounded-sm'>
                    <div className="px-4 py-2">
                        <span className="text-xs text-accent font-medium">
                            {Data?.searchResults.length ? 'Results' : 'No Results'} ({Data?.searchResults.length})
                        </span>
                    </div>
                    <ul className="w-full text-xs text-compliment dark:text-dark-compliment font-medium">
                        {Data?.searchResults.slice(0, 10).map(coin => (
                            <Link key={coin.id} to={`/coins/${coin.id}`}>
                                <button onClick={() => Data.setSearch("")} className="w-full px-4 py-2 text-start hover:text-dominant dark:hover:text-dark-dominant capitalize hover:bg-background dark:hover:bg-dark-background cursor-pointer">
                                    { coin.name }
                                </button>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default SearchBar;