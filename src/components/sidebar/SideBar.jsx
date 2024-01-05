import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SideBar = () => {
  return (
    <Card className='lg:block w-64 h-screen hidden'>
      <CardContent className='p-0 m-0 '>
        <h1 className='text-center py-6 text-4xl font-mono uppercase text-[#1D2B53] '>
          NetFilm
        </h1>
        <Separator className=' h-[2px] ' />
        <div className='p-6 flex flex-col space-y-8'>
          <p className='text-sm text-gray-400'>Categories</p>
          <h1>Popular</h1>
          <h1>Top Rated</h1>
          <h1>Up Coming</h1>
        </div>
        <Separator className=' h-[2px] ' />
        <div className='p-6 flex flex-col space-y-8'>
          <p className='text-sm text-gray-400'>Genres</p>
          <h1>Comedy</h1>
          <h1>Action</h1>
          <h1>Horror</h1>
          <h1>Animation</h1>
        </div>
      </CardContent>
    </Card>
  );
};

export default SideBar;
