import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import Toasts from '../molecules/notification';

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
    <div className={`${mAuto ? 'w-max-[1280px]' : ''}`}>
      <div className={bg}>
        <Navigation />
      </div>
      <div className="grid place-content-center">{children}</div>
      <Footer />
      <Toasts />
    </div>
  );
};

export default HomeRoot;
