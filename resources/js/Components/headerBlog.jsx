import React from "react";
import formatDate from "./FormartTime";

const HeaderBlog = ({BlogID,view}) => {
    return (
        <>
            <header className="relative pt-16 z-10 md:py-20 lg:py-28 bg-neutral-900 dark:bg-black">
                <div className="dark container relative z-10">
                    <div className="max-w-screen-md">
                        <div className="nc-SingleHeader ">

                            <div className="space-y-5">
                                <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList">
                                    <a
                                        className="transition-colors hover:text-white duration-300 nc-Badge relative inline-flex  py-1 rounded-full font-medium text-xs !px-3 text-pink-800 bg-pink-100 hover:bg-pink-800"
                                        href="/ncmaz/archive/the-demo-archive-slug">{BlogID.ten}</a>
                                    {/* <a
                                        className="transition-colors hover:text-white duration-300 nc-Badge relative inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-red-800 bg-red-100 hover:bg-red-800"
                                        href="/ncmaz/archive/the-demo-archive-slug">Jewelry</a> */}
                                </div>
                                <h1 className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl "
                                    title="Quiet ingenuity: 120,000 lunches and counting">{BlogID.tieuDe}</h1>
                                <div className="w-full border-b border-neutral-100 dark:border-neutral-800"></div>
                                <div
                                    className="flex flex-col sm:flex-row justify-between sm:items-end space-y-5 sm:space-y-0 sm:space-x-5">
                                    <div className="nc-PostMeta2 flex items-center flex-wrap text-neutral-700 text-left dark:text-neutral-200 text-sm leading-none flex-shrink-0"
                                        data-nc-id="PostMeta2">

                                        <div className="ml-3">

                                            <div className="text-xs mt-[6px]"><span
                                                className="text-neutral-700 dark:text-neutral-300 ">{formatDate(BlogID.ngayDang)}</span><span
                                                    className="mx-2 font-semibold"></span></div>
                                        </div>
                                    </div>
                                    <div className="nc-SingleMetaAction2 ">
                                        <div className="flex flex-row space-x-2.5 items-center">
                                            <div className="nc-PostCardLikeAndComment flex items-center !space-x-2.5"
                                                data-nc-id="PostCardLikeAndComment"><button
                                                    className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-4 h-9 text-sm focus:outline-none text-rose-600 bg-rose-50 dark:bg-rose-100"
                                                    title="Liked" data-nc-id="PostCardLikeAction"
                                                    >
                                                        {/* <svg width="24" height="24"
                                                        fill="currentColor" viewBox="0 0 24 24">
                                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                                                            stroke-linejoin="round" stroke-width="1"
                                                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                                            clip-rule="evenodd"></path>
                                                    </svg> */}
                                                  Lượt xem: <span className="ml-1 text-rose-600">{view}</span></button>

                                            </div>
                                            <div className="px-1">
                                                <div className="border-l border-neutral-200 dark:border-neutral-700 h-6"></div>
                                            </div><button
                                                className="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
                                                data-nc-id="NcBookmark" data-nc-bookmark-post-id="eae0212192f63287e0c212"
                                                title="Save to reading list"><svg width="24" height="24" fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path stroke="currentColor" aria-hidden="true" fill="none"
                                                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                                        d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">
                                                    </path>
                                                </svg></button>
                                            <div className="relative inline-block text-left"><button
                                                className="flex-shrink-0 flex items-center justify-center focus:outline-none h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-full"
                                                title="More" id="headlessui-menu-button-13" type="button"
                                                aria-haspopup="true" aria-expanded="false"><svg
                                                    xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                                                    </path>
                                                </svg></button></div>
                                            <div>
                                                <div className="relative inline-block text-left"><button
                                                    className="text-neutral-500 dark:text-neutral-400 flex items-center justify-center rounded-full  h-9 w-9 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 focus:outline-none"
                                                    title="More" id="headlessui-menu-button-14" type="button"
                                                    aria-haspopup="true" aria-expanded="false"><svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                        fill="currentColor" aria-hidden="true" className="h-5 w-5"
                                                        stroke="none">
                                                        <path
                                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                        </path>
                                                    </svg></button></div>
                                                <div className="nc-NcModal"></div>
                                                <div className="nc-NcModal"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-0 md:absolute md:top-0 md:right-0 md:bottom-0 md:w-1/2 lg:w-2/5 2xl:w-1/3">
                    <div
                        className="hidden md:block absolute top-0 left-0 bottom-0 w-1/5 from-neutral-900 dark:from-black bg-gradient-to-r">
                    </div><img className="block w-full h-full object-cover"
                        src="https://images.unsplash.com/photo-1554941068-a252680d25d9?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                        alt="" />
                </div>
            </header>
        </>

    );
}
export default HeaderBlog;