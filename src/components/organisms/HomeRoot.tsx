import Footer from './Footer';
import Navigation from './Navigation';
import Toasts from '../molecules/notification';

const HomeRoot = ({ children, bg = '' }: { children: Object; bg?: string }) => {
  return (
    <>
      <div className={bg}>
        <Navigation />
      </div>
      {children}
      <Footer />
      <Toasts />
    </>
  );
};

export default HomeRoot;
