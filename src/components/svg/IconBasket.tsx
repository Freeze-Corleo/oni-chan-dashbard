import React, { FC } from 'react';

interface SVGIconBasketProps {
  className?: string;
  onClickSvg?: () => void;
}

const SVGIconBasket: FC<SVGIconBasketProps> = ({ className, onClickSvg }) => (
  <svg
    className={className}
    id="Calque_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 133.21 114.17"
  >
    <g id="Icon_ionic-ios-basket" transform="translate(-2.249 -4.5)">
      <path id="Tracé_4" d="M105.82,92.08h14.63l5.2-22.42h-19.83v22.42Z" />
      <path
        id="Tracé_5"
        d="M105.82,114.17h.15c5.34,0,10.02-3.61,11.39-8.77l1.78-7.71h-13.31v16.48Z"
      />
      <path id="Tracé_6" d="M69.4,97.67h30.84v16.5h-30.84v-16.5Z" />
      <path id="Tracé_7" d="M12.8,92.08h14.56v-22.42H7.59l5.21,22.42Z" />
      <path id="Tracé_8" d="M32.98,38.06h30.84v26.02h-30.84v-26.02Z" />
      <path id="Tracé_9" d="M69.4,38.06h30.84v26.02h-30.84v-26.02Z" />
      <path
        id="Tracé_10"
        d="M15.91,105.34c1.32,5.18,5.98,8.81,11.33,8.83h.15v-16.49H14.1l1.81,7.66Z"
      />
      <path id="Tracé_11" d="M32.98,97.67h30.84v16.5h-30.84v-16.5Z" />
      <path id="Tracé_12" d="M69.4,69.66h30.84v22.42h-30.84v-22.42Z" />
      <path id="Tracé_13" d="M32.98,69.66h30.84v22.42h-30.84v-22.42Z" />
      <path
        id="Tracé_14"
        d="M128.44,38.06h-14.23V9.51c-.02-5.25-4.27-9.5-9.52-9.51H28.52c-5.25,.02-9.5,4.27-9.51,9.51v28.54H4.77C2.14,38.05,0,40.18,0,42.81c0,.36,.04,.72,.12,1.08l5.86,20.19H27.36V12.49c.01-2.29,1.86-4.14,4.15-4.15H101.68c2.29,.01,4.14,1.86,4.15,4.15v51.6h21.41l5.84-20.2c.59-2.56-1.01-5.12-3.57-5.71-.35-.08-.71-.12-1.07-.12Z"
      />
    </g>
  </svg>
);

export default SVGIconBasket;
