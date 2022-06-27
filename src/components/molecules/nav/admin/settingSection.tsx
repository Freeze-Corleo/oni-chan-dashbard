import { Link } from 'react-router-dom';

const SettingNavigation = () => {
  return (
    <div className="pb-8">
      <h3 className="px-2 pb-4 text-sm font-medium tracking-wider uppercase opacity-50 text-white-grayish">
        Customisation
      </h3>
      <div className="flex items-center px-2 py-2 mb-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <Link to="/my-profil">
          <h3 className="pl-3 text-sm tracking-wide">Paramètres</h3>
        </Link>
      </div>
      <div className="flex items-center px-2 py-2 mb-2 transition duration-200 rounded-lg cursor-pointer hover:bg-dark-hover text-white-grayish hover:text-white linear">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
        <Link to="/admin/mes-infos-pro">
          <h3 className="pl-3 text-sm tracking-wide">Mes informations pros</h3>
        </Link>
      </div>
    </div>
  );
};

export default SettingNavigation;
