import { Link, Head } from '@inertiajs/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Header from './header';
import Footer from './footer';
import BlogPage from './Blog';
import Pagination from '@/Components/pagination';
import NavCategory from '@/Components/NavCategory';
export default function Welcome({ auth, laravelVersion, phpVersion, blogPosts, category, blogOutstand }) {
    return (
        <>
            <Head title="Trang chủ" />
            <Header auth={auth} categorys={category} />
            <main className='container relative'>
                <div className="container relative">
                    <div className="nc-SectionLargeSlider relative pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-24 ">
                        <div className="nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50">
                            <div className="max-w-2xl">
                                <h2 className="text-3xl md:text-4xl text-neutral-500 font-semibold">Bài viết nổi bật</h2><span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Khám phá những bài viết nổi bật nhất trong mọi chủ đề của cuộc sống. </span>
                            </div>
                        </div>
                 


                            <div className="nc-CardLarge1 relative flex flex-col-reverse md:flex-row justify-end ">
                                <div className="md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5" >
                                    <div className="p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 -- nc-dark-box-bg">
                                        <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList"><a className="transition-colors hover:text-white duration-300 nc-Badge relative inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-yellow-800 bg-yellow-100 hover:bg-yellow-800" href={`/blog/${blogOutstand.tinID}`}>{blogOutstand.ten}</a></div>
                                        <h2 className="nc-card-title text-xl sm:text-2xl font-semibold "><a className="line-clamp-2" title={`${blogOutstand.tieuDe}`}  href={`/blog/${blogOutstand.tinID}`}>{blogOutstand.tieuDe} </a></h2><a className="nc-CardAuthor2  inline-flex items-center " data-nc-id="CardAuthor2" href={`/blog/${blogOutstand.tinID}`}>
                                           
                                            <div>
                                              <span className="flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400"><span>{blogOutstand.ngayDang}</span></span>
                                            </div>
                                        </a>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="nc-PostCardLikeAndComment flex items-center space-x-2 " data-nc-id="PostCardLikeAndComment"><button className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-rose-600 bg-rose-50 dark:bg-rose-100" title="Liked" data-nc-id="PostCardLikeAction" fdprocessedid="8rhc6a"><svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                <path stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1} d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z" clipRule="evenodd"></path>
                                            </svg><span className="ml-1 text-rose-600">{blogOutstand.xem}</span></button>
                                            {/* <a className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-760 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none" title="Comments" data-nc-id="PostCardCommentBtn" href={`/blog/${blogOutstand.tinID}`}><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1} d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                                </path>
                                                <path stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                                </path>
                                                <path strokeLinecap="round" stroke="currentColor"

                                                    strokeLinejoin="round" d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                                </path>
                                                <path stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round" d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                                </path>
                                            </svg></a> */}
                                            </div>
                                            <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-760 " data-nc-id="PostCardSaveAction">
                                                {/* <span>2 min read</span> */}
                                                <button className="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 bg-opacity-20 hover:bg-opacity-50 dark:bg-neutral-800 dark:bg-opacity-30 dark:hover:bg-opacity-50" data-nc-id="NcBookmark" data-nc-bookmark-post-id="DEMO_POSTS_1" title="Save to reading list" fdprocessedid="8bn2ayb"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                <path stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={1} d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">
                                                </path>
                                            </svg></button></div>
                                        </div>
                                    </div>
                                    <div className="p-4 sm:pt-8 sm:px-10">
                                        <div className="nc-NextPrev relative flex items-center text-neutral-900 dark:text-neutral-760 " data-nc-id="NextPrev" data-glide-el="controls">
                                            <button className="w-11 h-11 text-xl mr-[6px] bg-white  border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none" title="Prev" data-glide-dir="<" fdprocessedid="tep5i8">
                                                <FontAwesomeIcon icon={faAngleLeft} />

                                            </button>
                                            <button className="w-11 h-11 text-xl bg-white  border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 focus:outline-none" title="Next" data-glide-dir=">" fdprocessedid="okrj0m">
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-4/5 lg:w-2/3"><a href="single/this-is-single-slug">
                                    <div className="nc-NcImage aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative" data-nc-id="NcImage">
                                        <img src={`${blogOutstand.urlHinh}`} alt="Lenovo’s smarter devices stoke professional passions " /></div>
                                </a></div>
                            </div>
                        
                    </div>
                </div>

                {/* // blog new */}
                <div className='nc-SectionLatestPosts relative pb-16 lg:pb-28'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-14'>
                            <div className='nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50'>
                                <div className="max-w-2xl"><h2 className="text-3xl md:text-4xl text-neutral-500 font-semibold">Bài viết mới 🎈</h2><span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Khám phá những bài viết nổi bật nhất trong tất cả các chủ đề của cuộc sống.</span></div>
                            </div>
                            <div className='grid gap-6 md:gap-8 '>


                                <BlogPage blogPosts={blogPosts}>

                                </BlogPage>
                                <Pagination blogPosts={blogPosts}>
                                </Pagination>
                            </div>

                        </div>
                        <div className='w-full space-y-7 mt-24 lg:mt-0 lg:w-2/5 lg:pl-10 xl:pl-0 xl:w-1/3 '>
                            <div className="nc-WidgetCategories rounded-3xl  overflow-hidden bg-neutral-100 "
                                data-nc-id="WidgetCategories">
                                <div className="nc-WidgetHeading1 flex items-center justify-between p-4 xl:p-5 border-b border-neutral-200 dark:border-neutral-700 "
                                    data-nc-id="WidgetHeading1">
                                    <h2 className="text-lg text-neutral-900  font-semibold flex-grow">✨ Trending topic</h2>
                                    {/* <a
                                        className="flex-shrink-0 block text-primary-700 dark:text-primary-500 font-semibold text-sm"
                                        rel="noopener noreferrer" href="/ncmaz/">View all</a> */}
                                </div>
                                <div className="flow-root">
                                    <div className="flex flex-col divide-y  dark:divide-neutral-700">
                                        <NavCategory categoryTIN={category}>

                                        </NavCategory>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>


            {/* // Footer */}
            <Footer />
        </>
    );
}
