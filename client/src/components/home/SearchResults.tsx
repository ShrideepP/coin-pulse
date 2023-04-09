import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';

const SearchResults = () => {

    const Data = useContext(DataContext);

    const handleSelectClick = () => Data?.setSearch('');

    return (
        <div className='w-full h-fit absolute top-full left-0 border-x border-x-secondary dark:border-x-dark-secondary bg-primary dark:bg-dark-primary border-b border-b-secondary dark:border-b-dark-secondary border-t-2 border-t-accent rounded-sm'>
            <div className="px-4 py-2">
                <span className="text-xs text-accent font-medium tracking-wider">
                    {Data?.searchResults.length ? 'Results' : 'No Results'} ({Data?.searchResults.length})
                </span>
            </div>
            <ul className="w-full text-xs text-compliment dark:text-dark-compliment font-medium tracking-wider">
                {Data?.searchResults.slice(0, 10).map(coin => (
                    <Link key={coin.id} to={`/coins/${coin.id}`}>
                        <button onClick={handleSelectClick} className="w-full px-4 py-2 text-start hover:text-dominant dark:hover:text-dark-dominant capitalize hover:bg-background dark:hover:bg-dark-background cursor-pointer">
                            {coin.name}
                        </button>
                    </Link>
                ))}
            </ul>
        </div>
    );

};

export default SearchResults;