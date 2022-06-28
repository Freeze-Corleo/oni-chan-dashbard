import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Toasts from '../molecules/notification';

import { Helmet } from 'react-helmet';

const HomeRoot = ({
  children,
  bg = '',
  mAuto = true,
}: {
  children: React.ReactNode;
  bg?: string;
  mAuto?: boolean;
}) => {
  return (
    <>
      <Helmet>
        <title>MatR</title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Ideas page using react helmet very easy to implement "
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className={`${mAuto ? 'w-max-[1280px]' : ''} font-montserrat`}>
        <div className={bg}>
          <Navigation />
        </div>
        <div className="grid place-content-center">{children}</div>
        <Footer />
        <Toasts />
      </div>
    </>
  );
};

export default HomeRoot;
