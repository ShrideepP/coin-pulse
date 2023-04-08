import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';

const Pagination = () => {

    const Data = useContext(DataContext);

    return (
        <div className='w-full h-fit spaceY flex justify-center'>
            <div className="flex gap-x-2">
                <button onClick={Data?.prevPage} disabled={Data?.currentPage === 1} className={`w-8 h-8 text-sm grid place-items-center border ${Data?.pageNums[0] === 1 ? 'text-compliment dark:text-dark-compliment border-compliment dark:border-dark-compliment':'text-accent hover:text-white hover:bg-accent-dark border-accent'} rounded-sm`}>
                    <GoChevronLeft />
                </button>
                {Data?.pageNums.map(num => (
                    <button key={num} onClick={() => Data.handlePageNumClick(num)} className={`w-8 h-8 text-sm ${(Data.currentPage === num || ((num * 100) + 1) - 100 === Data.currentPage) ? 'text-white bg-accent-dark' : 'text-compliment dark:text-dark-compliment hover:text-dominant dark:hover:text-dark-dominant bg-primary hover:bg-background dark:hover:bg-dark-background dark:bg-dark-primary border border-secondary dark:border-dark-secondary'} grid place-items-center rounded-sm`}>{num}</button>
                ))}
                <span className='w-8 h-8 grid place-items-center text-sm text-compliment dark:text-dark-compliment hover:text-dominant dark:hover:text-dark-dominant'>...</span>
                <button onClick={Data?.nextPage} className='w-8 h-8 text-accent hover:text-white text-sm grid place-items-center border border-accent hover:bg-accent-dark rounded-sm'>
                    <GoChevronRight />
                </button>
            </div>
        </div>
    );

};

export default Pagination;