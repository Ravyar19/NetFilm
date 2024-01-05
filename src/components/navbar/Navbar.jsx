import { SunMoon, Menu } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <div className=' h-20  w-full px-10 md:px-20 py-8 flex justify-between items-center shadow-lg'>
      <SunMoon className='cursor-pointer hidden lg:block' />
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Menu className='lg:hidden' />
          </SheetTrigger>
          <SheetContent className='p-10 m-0 w-64 ' side='left'>
            <h1 className='text-center py-6 text-4xl font-mono uppercase text-[#1D2B53] '>
              NetFilm
            </h1>{' '}
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
          </SheetContent>
        </Sheet>
      </div>

      <div className='flex w-full max-w-sm items-center justify-center space-x-2'>
        <Input className=' w-42  md:w-96 outline-none ' placeholder='Search' />
        <Button type='submit' className='hidden md:block bg-[#7E2553] '>
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
