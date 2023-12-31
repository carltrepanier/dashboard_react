import React from 'react';

export default function ChartsHeader({ category, title }) {
  return (
    <div className='mb-10'>
      <p className='text-gray-400'>Chart</p>
      <p className='text-3xl font-extrabold tracking-tight dark:text-gray-200 text-slate-900'>{category}</p>
      <p className='text-center dark:text-gray-200 text-xl mb-2 mt-3'>{title}</p>
    </div>
  )
};
