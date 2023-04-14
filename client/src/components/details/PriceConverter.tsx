import { useState } from 'react';
import { PriceConverterProps } from "./Type";
import { formatter } from '../../constants';

const PriceConverter = ({ name, symbol, price } : PriceConverterProps) => {

    const [coinPrice, setCoinPrice] = useState<number | null>(price);

    const [numberOfCoins, setNumberOfCoins] = useState<number>(1);

    const handleNumberOfCoins = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value);
        if(value > 0) {
            setNumberOfCoins(value);
            setCoinPrice(price && value * price);
        };
    };

    const handleCoinPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.currentTarget.value);
        if(value > 0) {
            setCoinPrice(value);
            if (price) setNumberOfCoins(value / price)
        };
    };

    return (
        <div className="space-y-4 innerSpace bg-primary dark:bg-dark-primary rounded">
            <h3 className='text-lg text-compliment dark:text-dark-compliment font-semibold'>
                { name } Converter
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="flex items-center overflow-hidden bg-background dark:bg-dark-background rounded">
                    <div className='w-[20%] h-12 grid place-items-center border-r border-secondary dark:border-dark-secondary'>
                        <span className='text-sm text-compliment dark:text-dark-compliment font-semibold'>
                            { symbol }
                        </span>
                    </div>
                    <input 
                        type="number" 
                        value={coinPrice ? numberOfCoins : '-'} 
                        onChange={handleNumberOfCoins} 
                        className='w-[80%] h-12 px-4 text-sm text-dominant dark:text-dark-dominant font-semibold border-0 outline-none bg-transparent' 
                    />
                </div>
                <div className="flex items-center overflow-hidden bg-background dark:bg-dark-background rounded">
                    <div className='w-[20%] h-12 grid place-items-center border-r border-secondary dark:border-dark-secondary'>
                        <span className='text-sm text-compliment dark:text-dark-compliment font-semibold'>
                            USD
                        </span>
                    </div>
                    <input 
                        type="number" 
                        value={coinPrice ? coinPrice.toFixed(2) : '-'} 
                        onChange={handleCoinPrice} 
                        className='w-[80%] h-12 px-4 text-sm text-dominant dark:text-dark-dominant font-semibold border-0 outline-none bg-transparent' 
                    />
                </div>
            </div>
            <div>
                <span className='text-sm text-compliment dark:text-dark-compliment font-medium'>
                    1 { symbol } = { price ? formatter.format(price) : '-' }
                </span>
            </div>
        </div>
    );

};

export default PriceConverter;