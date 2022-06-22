import HomeRoot from '../components/organisms/HomeRoot';
import HomeContent from './content/HomeContent';

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <HomeRoot children={<HomeContent />} bg="bg-[#BBF49B]" />
      </div>
    </div>
  );
};

export default Home;
