import { Fragment, useContext } from 'react'
import { Disclosure, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthProvider'
import { FaUser } from 'react-icons/fa';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Add Task', href: '/add-task' },
    { name: 'My Task', href: '/my-task' },
    { name: 'Completed', href: '/completed-task' },
    { name: 'Important', href: '/important-task' },
    { name: 'All Task', href: '/all-task' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
    const { user, singOut } = useContext(AuthContext);
    const handleSingOut = () => {
        singOut()
            .then(result => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <Disclosure as="nav" className="bg-white drop-shadow-md">
                {({ open }) => (
                    <>
                        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-16 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <a
                                            href="/"
                                            aria-label="Go home"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <svg
                                                className="w-8 text-teal-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-white-100 uppercase">
                                                MY Task
                                            </span>
                                        </a>
                                    </div>
                                    <div className="hidden sm:ml-6 sm:block  justify-center align-middle">
                                        <div className="flex justify-center align-middle space-x-4">
                                            {navigation.map((item) => (
                                                <NavLink
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white navbtn',
                                                        'px-3 py-2 rounded-md text-sm font-medium flex justify-center align-middle'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">


                                        <div className='flex'>
                                            {user?.photoURL ?
                                                <>
                                                    <Link to='/login'>
                                                        <button onClick={handleSingOut} className='mr-3 primary_btn text-black'>SignOut</button>
                                                    </Link>
                                                    <img
                                                        src={user?.photoURL}
                                                        class="rounded-full w-10"
                                                        alt="Avatar"
                                                    />
                                                </>
                                                :
                                                <>
                                                    <div className='flex'>
                                                        <Link to='/login'>
                                                            <button className='mr-3 primary_btn text-black'>Login</button>
                                                        </Link>
                                                        <Link to='/register'>
                                                            <button className='mr-3 primary_btn text-black' >Register</button>
                                                        </Link>
                                                        <FaUser></FaUser>
                                                    </div>
                                                </>}


                                        </div>

                                    </Menu>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
};

export default Header;