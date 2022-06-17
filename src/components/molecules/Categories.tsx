import React from 'react';
import Card from '../atoms/Card';

const Categories = () => {
  return (
    <>
      <div className='text-center mt-20 mb-20 text-4xl font-bold'>
        <p>Explorer par catégories</p>
      </div>
      <div className='grid grid-cols-3 gap-x-0 gap-y-8 mb-28 place-items-center'>
        <Card img='/img/burger.jpg' label='EQUILIBRÉ' />
        <Card img='/img/pizza.jpg' label='PETITS PLATS' />
        <Card img='/img/burger.jpg' label='EQUILIBRÉ' />
        <Card img='/img/pizza.jpg' label='PETITS PLATS' />
        <Card img='/img/burger.jpg' label='EQUILIBRÉ' />
        <Card img='/img/pizza.jpg' label='PETITS PLATS'/>
      </div>
    </>
  );
};

export default Categories;
