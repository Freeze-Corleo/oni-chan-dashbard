import Input from './Input';

const SearchInput = () => {
    return (
        <div className="w-1/3 col-span-2">
            <div className="relative text-gray-600 focus-within:text-gray-400">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                </span>
                <Input type="text" nameInput="search" placeholder="Chercher dans Burger and co" />
            </div>
        </div>
    );
};

export default SearchInput;