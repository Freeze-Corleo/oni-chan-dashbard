import Footer from "./Footer";
import Navigation from "./Navigation";

const HomeRoot = ({
    children,
    bg = '',
}: {
    children: Object;
    bg?: string;
}) => {
    return (
        <>
            <div className={bg}>
            <Navigation />
            </div>
            {children}
            <Footer />
        </>
    );
}

export default HomeRoot;
