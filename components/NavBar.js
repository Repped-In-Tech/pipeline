/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-extraneous-dependencies */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { PlusIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { signInUser, signOutUser } from '../utils/auth';

const navigation = [
  { name: 'Link One', href: '/some', current: true },
  { name: 'Link Two', href: '/other', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Disclosure as="nav" className="bg-neutral-800 sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex items-center">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <Link passHref href="/" className="cursor-pointer">
                  <button
                    type="button"
                    className="text-2xl font-medium text-gray-400 mr-3"
                  >
                    PIPELINE
                  </button>
                </Link>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 cursor-pointer">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} passHref>
                      <div
                        className={classNames(
                          item.href === router.asPath
                            ? 'bg-neutral-900 text-white'
                            : 'text-neutral-300 hover:bg-neutral-800 hover:text-green-500',
                          'px-3 py-2 rounded-md text-lg font-medium',
                        )}
                        aria-current={
                          item.href === router.asPath ? 'page' : undefined
                        }
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              {user ? (
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="relative inline-flex items-center rounded-full border border-transparent bg-neutral-400 px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <PlusIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>New Job</span>
                    </button>
                  </div>
                  <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={user.photoURL}
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <Link href={item.href} passHref>
                                  <div
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700',
                                    )}
                                  >
                                    {item.name}
                                  </div>
                                </Link>
                              )}
                            </Menu.Item>
                          ))}
                          <Menu.Item key="sign-out">
                            <button
                              type="button"
                              className="block px-4 py-2 text-sm text-gray-700"
                              onClick={signOutUser}
                            >
                              Sign Out
                            </button>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  size="lg"
                  className="copy-btn text-gray-400"
                  onClick={signInUser}
                >
                  Member Sign In
                </button>
              )}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            { user && (
            <div className="border-t border-gray-700 pt-4 pb-3">
              <div className="flex items-center px-5 sm:px-6">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    {user.displayName}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-1 px-2 sm:px-3">
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  key="sign-out"
                  as="a"
                  onClick={signOutUser}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                >
                  Sign Out
                </Disclosure.Button>
              </div>
            </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
