import Card from "../components/atoms/Card";
import Input from "../components/atoms/Input";
import SearchInput from "../components/atoms/SearchInput";
import Footer from "../components/organisms/Footer";
import Navigation from "../components/organisms/Navigation";

const Restaurant = () => {
    return (
        <>
            <Navigation />
            <div className='grid grid-cols-2 place-items-center mt-20 mb-20'>
                <SearchInput />
                <div className="mt-20">
                <Card img='/img/burger.jpg' />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Restaurant;