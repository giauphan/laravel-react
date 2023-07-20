import React from "react";
import { Link } from '@inertiajs/react';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'flowbite';
const Header = ({ auth, laravelVersion, phpVersion, categorys }) => {
    return (
        <header>
            <div className="nc-Header nc-will-change-top top-0 w-full left-0 right-0 z-40 transition-all" >
                <div>
                    <div className="nc-MainNav nc-MainNav1 relative z-10 notOnTop backdrop-filter">
                        <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
                            <div className="flex justify-start flex-grow items-center space-x-4 sm:space-x-10 2xl:space-x-14"><a className="ttnc-logo inline-block text-primary-6000" href="/"><svg width="59" height="41" viewBox="0 0 59 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.5224 9.69455C34.547 8.66632 35.1818 7.24829 35.1818 5.68181C35.1818 2.54402 32.6378 0 29.5 0C27.516 0 25.7721 1.01857 24.7559 2.55971C24.4868 2.83004 1.8706 30.7044 1.65941 31.0255C0.633591 32.0525 0 33.4705 0 35.037C0 38.1748 2.54281 40.7188 5.6806 40.7188C7.66464 40.7188 9.40853 39.7002 10.4247 38.1591C10.695 37.8888 33.3112 10.0144 33.5224 9.69455Z" fill="currentColor"></path>
                                <path d="M46.6081 22.9203C47.6363 21.8921 48.2723 20.4728 48.2723 18.904C48.2723 15.7662 45.7283 13.2221 42.5905 13.2221C40.6065 13.2221 38.8614 14.2419 37.8452 15.7831C37.5737 16.0558 25.6948 30.6972 25.4824 31.0206C24.4541 32.0489 23.8193 33.4681 23.8193 35.037C23.8193 38.1748 26.3621 40.7188 29.4999 40.7188C31.484 40.7188 33.2291 39.699 34.2452 38.1579C34.5168 37.8851 46.3957 23.2437 46.6081 22.9203Z" fill="currentColor"></path>
                                <path d="M59.0001 5.68181C59.0001 8.81959 56.4573 11.3636 53.3195 11.3636C50.1817 11.3636 47.6377 8.81959 47.6377 5.68181C47.6377 2.54402 50.1817 0 53.3195 0C56.4573 0 59.0001 2.54402 59.0001 5.68181Z" fill="currentColor"></path>
                                <path d="M11.3624 5.68181C11.3624 8.81959 8.81838 11.3636 5.6806 11.3636C2.54281 11.3636 0 8.81959 0 5.68181C0 2.54402 2.54281 0 5.6806 0C8.81838 0 11.3624 2.54402 11.3624 5.68181Z" fill="currentColor"></path>
                            </svg></a>
                                <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:items-center lg:space-x-1 relative">
                                    <li className="menu-item menu-dropdown relative"><a className="inline-flex items-center text-sm xl:text-base font-normal  dark:text-neutral-900 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-200 text-gray-900   dark:hover:text-neutral-600" rel="noopener noreferrer" id="headlessui-popover-button-1" aria-expanded="false" href="">Trang chủ<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-1 -mr-1 h-4 w-4 text-neutral-400">
                                        <path
                                            fill="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            fillRule="evenodd"
                                        ></path>

                                    </svg></a></li>
                                    <li>
                                        <button
                                            id="dropdownNavbarLink"
                                            data-dropdown-toggle="dropdownNavbar"
                                            className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-black md:dark:hover:text-blue-500 dark:focus:text-black dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                        >
                                            Dropdown{" "}
                                            <svg
                                                className="w-2.5 h-2.5 ml-2.5"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 10 6"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 4 4 4-4"
                                                />
                                            </svg>
                                        </button>
                                        {/* <!-- Dropdown menu --> */}
                                        <div
                                            id="dropdownNavbar"
                                            className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                        >
                                            <ul
                                                className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton"
                                            >
                                                {categorys.map((list, index) => (
                                                    <li key={list.id}>
                                                        <a
                                                            href={`/category/${list.id}`}
                                                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                        >
                                                            {list.ten}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="menu-item menu-megamenu menu-megamenu--small relative"><a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-900 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-200   dark:hover:text-neutral-600" rel="noopener noreferrer" id="headlessui-popover-button-5" aria-expanded="false" href="/ncmaz#">Fewer cols<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-1 -mr-1 h-4 w-4 text-neutral-400">
                                        <path
                                            fill="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            fillRule="evenodd"
                                        ></path>

                                    </svg></a></li>
                                    <li className="menu-item menu-dropdown relative"><a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-900 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-200   dark:hover:text-neutral-600" rel="noopener noreferrer" id="headlessui-popover-button-7" aria-expanded="false" href="/ncmaz#">Templates<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-1 -mr-1 h-4 w-4 text-neutral-400">
                                        <path
                                            fill="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            fillRule="evenodd"
                                        ></path>

                                    </svg></a></li>
                                    <li className="menu-item menu-dropdown relative"><a className="inline-flex items-center text-sm xl:text-base font-normal text-neutral-700 dark:text-neutral-900 py-2 px-4 xl:px-5 rounded-full hover:text-neutral-900 hover:bg-neutral-200   dark:hover:text-neutral-600" rel="noopener noreferrer" id="headlessui-popover-button-9" aria-expanded="false" href="/ncmaz#">Other pages<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="ml-1 -mr-1 h-4 w-4 text-neutral-400">
                                        <path
                                            fill="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            fillRule="evenodd"
                                        ></path>

                                    </svg></a></li>
                                </ul>
                            </div>
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="font-semibold text-gray-900 hover:text-gray-900 dark:text-gray-400  focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <div
                                        className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
                                        <div className="hidden items-center xl:flex space-x-1">
                                            {/* <button
                                                className="text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-900 hover:bg-neutral-100   focus:outline-none flex items-center justify-center "><span
                                                    className="sr-only" _msttexthash="5262036" _msthash="6">Bật chế độ tối</span></button> */}
                                            <div className="relative"><button
                                                className="text-2xl md:text-[28px] w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-900 hover:bg-neutral-100   focus:outline-none flex items-center justify-center"
                                                id="headlessui-popover-button-11" type="button" aria-expanded="false">
                                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            </button></div>
                                            <div className="px-1"></div>

                                            <Link
                                                href={route('register')}
                                                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 ">
                                                Đăng ký
                                            </Link>
                                        </div>
                                        <div className="flex items-center xl:hidden" _msthidden="1">
                                            <Link
                                                href={route('login')}
                                                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0 ">
                                                Đăng nhập
                                            </Link>

                                        </div>
                                    </div>


                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;