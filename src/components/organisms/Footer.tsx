import React from 'react';

export const LogoOniChan = () => {
  return (
    <svg
      width="150"
      height="60"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlSpace="preserve"
      overflow="hidden"
    >
      <defs>
        <clipPath id="clip0">
          <rect x="253" y="4" width="130" height="150" />
        </clipPath>
      </defs>
      <g clip-path="url(#clip0)" transform="translate(-253 -100)">
        <text
          fill="#A2F5B5"
          font-family="Adobe Clean Black,Adobe Clean Black_MSFontService,sans-serif"
          font-weight="900"
          font-size="35"
          transform="matrix(0.941667 0 0 0.941667 270.892 145)"
        >
          MatR
          <tspan font-size="40" x="85" y="0">
            .
          </tspan>
        </text>
      </g>
    </svg>
  );
};

/**
 * Footer component
 * @returns
 */
const Footer = () => {
  return (
    <div className="lg:p-10 relative z-50">
      <div className="bg-black grid grid-cols-3 rounded-3xl px-8">
        <div className="">
          <div className="py-4">
            <a href="/">
              <LogoOniChan />
            </a>
          </div>
          <img
            src={process.env.PUBLIC_URL + '/img/google-play-icon.png'}
            alt="logo google play"
            className="w-[150px] py-4"
          />
          <img
            src={process.env.PUBLIC_URL + '/img/app-store-icon.png'}
            alt="logo google play"
            className="w-[150px] py-4"
          />
        </div>
        <div className="grid place-content-center">
          <ul className="text-white space-y-6 tracking-wide font-normal text-md">
            <li className="transition duration-300 linear hover:text-[#A2F5B5]">
              <a href="/help">Obtenir de l'aide</a>
            </li>
            <li className="transition duration-300 linear hover:text-[#A2F5B5]">
              <a href="/register-restaurant">Ajouter un restaurant</a>
            </li>
            <li className="transition duration-300 linear hover:text-[#A2F5B5]">
              <a href="/register-delivery-man">Devenez coursier partenaire</a>
            </li>
            <li className="transition duration-300 linear hover:text-[#A2F5B5]">
              <a href="/history">Historique des commandes</a>
            </li>
          </ul>
        </div>
        <div className="grid place-content-center">
          <ul className="text-white space-y-6 tracking-wide font-normal text-md">
            <li className="transition duration-300 linear hover:text-[#A2F5B5]">
              <a href="/help">
                &Eacute;conomisez sur votre promi&egrave;re commande !
              </a>
            </li>
            <li className="transition duration-300 linear hover:text-[#A2F5B5]">
              <a href="/help">Obtenir de l'aide</a>
            </li>
          </ul>
          <div className="flex space-x-4 py-4">
            <a
              href="https://www.facebook.com/pierre.forques"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                id="Calque_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 83.85 83.87"
                className="fill-current text-white w-6 transition duration-300 linear hover:text-[#A2F5B5] cursor-pointer"
              >
                <path
                  id="Icon_metro-facebook"
                  d="M69.88,.01H13.98C6.26,.02,0,6.28,0,14v55.88c0,7.72,6.26,13.98,13.98,13.99h27.95V47.18h-10.48v-10.48h10.48v-7.86c0-7.23,5.87-13.09,13.1-13.09h13.1v10.48h-13.1c-1.45,0-2.62,1.17-2.63,2.61v7.86h14.41l-2.62,10.48h-11.79v36.69h17.47c7.72,0,13.98-6.27,13.98-13.99V13.99C83.85,6.27,77.6,0,69.88,0h0Z"
                />
              </svg>
            </a>
            <svg
              id="Calque_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 119.85 119.83"
              className="fill-current text-white w-6 transition duration-300 linear hover:text-[#A2F5B5] cursor-pointer"
            >
              <path
                id="Icon_awesome-instagram"
                d="M59.95,29.19c-16.97,0-30.73,13.76-30.73,30.73s13.76,30.73,30.73,30.73,30.73-13.76,30.73-30.73c.03-16.94-13.67-30.7-30.61-30.73-.04,0-.08,0-.12,0Zm0,50.7c-11.03,0-19.97-8.94-19.97-19.97,0-11.03,8.94-19.97,19.97-19.97,11.03,0,19.97,8.94,19.97,19.97-.01,11.03-8.95,19.96-19.97,19.97ZM99.09,27.93c0,3.96-3.21,7.16-7.16,7.16s-7.16-3.21-7.16-7.16,3.21-7.16,7.16-7.16h0c3.95,0,7.16,3.19,7.16,7.14,0,0,0,.02,0,.03Zm20.37,7.27c.2-9.32-3.28-18.34-9.68-25.11C102.99,3.72,93.98,.25,84.67,.42c-9.91-.56-39.56-.56-49.47,0C25.89,.24,16.89,3.7,10.1,10.07,3.71,16.85,.24,25.87,.42,35.18-.14,45.07-.14,74.73,.42,84.62c-.2,9.32,3.28,18.34,9.68,25.11,6.79,6.37,15.79,9.84,25.1,9.68,9.89,.56,39.55,.56,49.44,0,9.32,.2,18.34-3.28,25.11-9.68,6.38-6.79,9.85-15.8,9.68-25.11,.56-9.89,.56-39.52,0-49.41h.03Zm-12.8,60.03c-2.06,5.21-6.18,9.33-11.39,11.39-7.89,3.13-26.6,2.41-35.32,2.41s-27.46,.7-35.32-2.41c-5.21-2.06-9.33-6.18-11.39-11.39-3.13-7.89-2.41-26.6-2.41-35.32s-.7-27.47,2.41-35.32c2.05-5.22,6.18-9.35,11.39-11.4,7.89-3.13,26.6-2.41,35.32-2.41s27.46-.7,35.32,2.41c5.21,2.06,9.34,6.19,11.39,11.4,3.13,7.89,2.41,26.6,2.41,35.32s.72,27.46-2.41,35.32Z"
              />
            </svg>
            <svg
              id="Calque_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 157.85 157.86"
              className="fill-current text-white w-6 transition duration-300 linear hover:text-[#A2F5B5] cursor-pointer"
            >
              <path
                id="Icon_awesome-twitter-square"
                d="M140.94,0H16.91C7.57,0,0,7.57,0,16.91v124.04c0,9.34,7.57,16.91,16.91,16.91h124.03c9.34,0,16.91-7.57,16.91-16.91V16.91c0-9.34-7.57-16.91-16.91-16.91Zm-17.22,55.96c.07,.98,.07,2.01,.07,2.99,.25,36.07-28.79,65.5-64.85,65.75-.3,0-.6,0-.9,0-12.58,.03-24.89-3.56-35.48-10.34,1.85,.2,3.71,.3,5.57,.28,10.4,.02,20.5-3.45,28.69-9.87-9.89-.18-18.56-6.62-21.6-16.03,3.47,.6,7.02,.45,10.43-.42-10.8-2.2-18.54-11.71-18.5-22.73v-.28c3.2,1.79,6.77,2.79,10.43,2.93-6.43-4.28-10.3-11.5-10.29-19.22-.02-4.1,1.06-8.13,3.14-11.67,11.73,14.45,29.03,23.23,47.62,24.18-2.89-12.46,4.86-24.9,17.32-27.8,8.03-1.87,16.46,.68,22.11,6.69,5.19-.98,10.16-2.86,14.7-5.55-1.74,5.32-5.35,9.83-10.17,12.68,4.59-.52,9.08-1.73,13.32-3.59-3.14,4.64-7.07,8.7-11.59,12Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
