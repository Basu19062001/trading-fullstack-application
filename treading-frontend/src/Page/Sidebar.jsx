/* eslint-disable no-unused-vars */
import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { HomeIcon } from '@radix-ui/react-icons';
import path from 'path';
import React from 'react'

const menu =[
    {name: "Home", path: "/", icon: <HomeIcon className='h-6 w-6'/>},
    {name: "Home", path: "/", icon: <HomeIcon className='h-6 w-6'/>},
    {name: "Home", path: "/", icon: <HomeIcon className='h-6 w-6'/>},
    {name: "Home", path: "/", icon: <HomeIcon className='h-6 w-6'/>},
];

function Sidebar() {
  return (
    <div className='mt-10 space-y-5'>
        <div>
            <SheetClose 
            className='w-full'>
            <Button 
            variant="outline" 
            className="flex items-center gap-3 py-6 w-full">
                <span 
                className='w-8'>
                    <HomeIcon/>
                </span>
                <p>Home</p>
            </Button>
            </SheetClose>
            
        </div>
    </div>
  )
}

export default Sidebar