import * as React from 'react';
import { Fragment, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation: Array<{ name: string; href: string }> = [{ name: 'Home', href: '/' }];

export const Header: React.FunctionComponent = (): ReactElement => {
  return (
    <div data-testid={'header'}>
      <div className='header relative max-w-5xl m-auto'>
        <Popover>
          <div className='relative pt-6 px-4 sm:px-6 lg:px-8'>
            <nav className='relative flex items-end place-content-around sm:h-10' aria-label='Global'>
              <div className='flex items-end flex-grow flex-shrink-0 md:flex-grow-0'>
                <div className='justify-between w-full md:w-auto flex items-end md:hidden'>
                  <Popover.Button className='rounded-md inline-flex items-center justify-center focus:outline-none ring-2 ring-inset ring-indigo-500'>
                    <span className='sr-only'>Ouvrir le menu</span>
                    <Bars3Icon className='h-12 w-12' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <img
                src='https://skillicons.dev/icons?i=react,ts,tailwind,jest,vite,prettier,husky'
                width='300'
                alt='My skills'
              />
              <div className='hidden md:block md:ml-10 md:space-x-8'>
                {navigation.map((item: { name: string; href: string }) => (
                  <Link to={item.href} key={item.name} relative='path'>
                    <span className="font-bold text-xl cursor-pointer hover:text-indigo-600 hover:underline font-['Poppins'] underline-offset-8 transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='bg-white absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
            >
              <div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
                <div className='px-5 pt-4 flex items-center justify-between bg-white'>
                  <div>
                    <img className='h-8 w-auto sm:h-10' alt='Logo' src='/public/logo192.png' height='192' width='192' />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none ring-2 ring-inset ring-indigo-500'>
                      <span className='sr-only'>Fermer le menu</span>
                      <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='px-2 pt-2 pb-3 space-y-1 bg-white'>
                  {navigation.map((item: { name: string; href: string }) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 '
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </div>
  );
};
