"use client"

import { FunctionComponent, useState } from "react";
import { BiMenuAltLeft, BiSearch, BiUser } from 'react-icons/bi'
import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'

// TODO: Agregar type
// TODO: Cambiar a Next link
 
const UserButtonDialog: FunctionComponent<{}> = () => {
    const solutions = [
        {
          name: 'Insights',
          description: 'Measure actions your users take',
          href: '##',
        },
        {
          name: 'Automations',
          description: 'Create your own targeted content',
          href: '##',
        },
        {
          name: 'Reports',
          description: 'Keep track of your growth',
          href: '##',
        },
      ]

    return (  <div className="w-full max-w-sm px-4">
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className={`
              ${open ? '' : 'text-opacity-90'}
              group inline-flex items-center rounded-full px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
           <BiUser className="text-black text-2xl" />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-8 bg-white p-7">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="bg-gray-50 p-4">
                  <a
                    href="##"
                    className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <span className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        Documentation
                      </span>
                    </span>
                    <span className="block text-sm text-gray-500">
                      Start integrating products and tools
                    </span>
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  </div> );
}
 

const NavbarListLinks: FunctionComponent<{ links: { href: string, title?: string, target?: string }[] }> = ({ links }) => {
    const mobileStyles = "";
    const desktopStyles = "";


    return (<ul className="flex md:flex-row flex-col">
        {links.map((link) =>
            <li className="p-2 text-white md:text-black rounded-md hover:bg-slate-300 bg:bg-slate-100">
                <a title={link.title} target={link.target} href={link.href}>{link.title}</a>
            </li>)}
    </ul>);
};

const SearchBar: FunctionComponent<{}> = () => {
    return <div className="">
        {/* Desktop */}
        <div className="hidden md:flex rounded-md shadow-sm bg-slate-200 ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"><BiSearch /></span>
            <input type="text" name="username" id="username" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Buscar..." />
        </div>

        {/* Mobile */}
        <button className="md:hidden p-2 rounded-full bg-slate-500">
            <BiSearch className="text-white" />
        </button>
    </div>;
};

const Logo: FunctionComponent<{}> = () => {
    return (<a className="flex flex-shrink-0 items-center font-medium text-2xl" href="/" title="Llopin">
        Llopin
    </a>);
};

const NavbarMobile: FunctionComponent<{}> = () => {
    const [open, setOpen] = useState(false);
    const links = [
        {
            title: 'Most selled',
            href: '/most-selled',
        },
        {
            title: 'New arrivals',
            href: '/new-arrivals',
        },
    ]

    function toggleNavbar() {
        return open ? setOpen(false) : setOpen(true);
    }

    return (
        <>
            <div className="flex items-center h-14 m-2 p-2 rounded-md">
                <button onClick={toggleNavbar} className="flex items-center p-4 cursor-pointer h-full">
                    <BiMenuAltLeft className="text-3xl text-white" />
                </button>
                <div className="ml-2">
                    <Logo />
                </div>
                <div className='ml-auto'>
                    <SearchBar />
                </div>
            </div>
            {
                open ? <div className="mx-2 p-2 rounded-md bg-slate-400">
                    <NavbarListLinks links={links} />
                </div> : null
            }
        </>
    )
};

const Navbar: FunctionComponent<{}> = () => {
    const links = [
        {
            title: 'Most selled',
            href: '/most-selled',
        },
        {
            title: 'New arrivals',
            href: '/new-arrivals',
        },
    ]

    return (
        <nav>
            {/* Desktop */}
            <div className="hidden md:flex items-center justify-between p-4 m-4 rounded-md">
                <div className="">
                    <Logo />
                </div>
                <div className="">
                    <NavbarListLinks links={links} />
                </div>
                <div className="">
                    <SearchBar />
                </div>
                <div className="user">
                    <UserButtonDialog />
                </div>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
                <NavbarMobile />
            </div>
        </nav>
    );
};

export default Navbar;