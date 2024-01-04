import React from 'react';
import { SunMoon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar = () => {
  return (
    <div className=' h-20  w-full px-10 md:px-20 py-8 flex justify-between items-center shadow-lg'>
      <SunMoon className='cursor-pointer' />
      <div className='flex w-full max-w-sm items-center justify-center space-x-2'>
        <Input className=' w-42  md:w-96 outline-none ' placeholder='Search' />
        <Button type='submit' className='hidden md:block '>
          Search
        </Button>
      </div>
      <div className='flex justify-center items-center space-x-5'>
        <p className='hidden md:block'>My Movies</p>
        <Avatar>
          <AvatarImage src='https://github.com/shadcn.png' />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
