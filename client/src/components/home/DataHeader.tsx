import { useState, useEffect, useRef } from 'react';

const DataHeader = () => {

    const [isSticky, setIsSticky] = useState(false);

    const headerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if(headerRef.current) {
            const headerTopPosition = headerRef.current.getBoundingClientRect().top + window.scrollY;
            window.addEventListener('scroll', () => {
                if (window.scrollY >= headerTopPosition) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                };
            });
        };
    }, []);

    return (
        <div ref={headerRef} className={`${isSticky ? 'w-full spaceX fixed top-0 left-0' : ''}`}>
            <div className={`w-full h-fit px-2 md:px-4 bg-primary dark:bg-dark-primary border-b border-secondary dark:border-dark-secondary`}>
                <div className="w-full min-h-[8vh] grid grid-cols-5 md:grid-cols-9 lg:grid-cols-14 items-center">
                    <span className="data__header">#</span>
                    <span className="data__header col-span-2">Name</span>
                    <span className="data__header col-span-2">Price</span>
                    <span className="data__header hidden lg:block">1h %</span>
                    <span className="data__header hidden lg:block">24h %</span>
                    <span className="data__header hidden lg:block">7d %</span>
                    <span className="data__header hidden md:block col-span-2">Mkt Cap</span>
                    <span className="data__header hidden lg:block col-span-2">Volume(24h)</span>
                    <span className="data__header hidden md:block col-span-2">Total Supply</span>
                </div>
            </div>
        </div>
    );

};

export default DataHeader;