import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loading = () => {
    return (
        <div className={`w-full min-h-[25vh] grid place-items-center`}>
            <div className="w-12 h-12 grid place-items-center bg-primary dark:bg-dark-primary rounded-full">
                <AiOutlineLoading3Quarters className='text-dominant dark:text-dark-dominant text-2xl animate-spin' />
            </div>
        </div>
    );
};

export default Loading;