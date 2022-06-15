import Button from "../../components/atoms/RegisterButton";
import Categories from "../../components/molecules/Categories";
import Faq from "../../components/molecules/Faq";
import RegisterForm from "../../components/molecules/forms/Register";
import IntroPage from "../../components/molecules/IntroHomePage";
import ParrainageCard from "../../components/molecules/ParrainageCard";
import Presentation from "../../components/molecules/Presentation";

const HomeContent = () => {
    return (
        <>
            <IntroPage />
            <Categories />
            <ParrainageCard />
            <Presentation />
            <Faq />
        </>
    );
}

export default HomeContent;