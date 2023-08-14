import formatDate from '@/Components/FormartTime';
import React from 'react';

const BlogPage = ({ blogPosts }) => {

   
    return (
        <>
            {blogPosts.data.map(post => (
                <div key={post.tinID} className="nc-Card3 relative flex flex-col-reverse sm:flex-row sm:items-center rounded-[40px] group p-3 sm:p-5 2xl:p-6 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ]"
                    data-nc-id="Card3">
                    <a className="absolute inset-0" href={`/blog/${post.tinID}`}></a>
                    <div className="flex flex-col flex-grow">
                        <div className="space-y-3.5 mb-4">
                            <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList"><a
                                className="transition-colors hover:text-white duration-300 nc-Badge relative inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-red-800 bg-red-100 hover:bg-red-800"
                                href={`/blog/${post.tinID}`}>{post.ten}</a></div>
                            <div>
                                <h2
                                    className="nc-card-title block font-semibold text-neutral-900   text-xl">
                                    <a className="line-clamp-2"
                                        title="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean"
                                        href={`/blog/${post.tinID}`}>{post.tieuDe}</a></h2>
                                <div className="hidden sm:block sm:mt-2"><span
                                    className="text-neutral-500 dark:text-neutral-400 text-base line-clamp-1">{post.tomTat}</span></div>
                            </div>
                            <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 text-xs leading-none"
                                data-nc-id="PostCardMeta"><a className="relative flex items-center space-x-2"
                                    href={`/blog/${post.tinID}`}>

                                </a><span className="text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium">·</span><span
                                    className="text-neutral-500 dark:text-neutral-400 font-normal">{formatDate(post.ngayDang)}</span></div>
                        </div>
                        <div className="flex items-center flex-wrap justify-between mt-auto">
                            <div className="nc-PostCardLikeAndComment flex items-center space-x-2 "
                                data-nc-id="PostCardLikeAndComment"><button
                                    className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-black-600 bg-rose-50 dark:bg-rose-100"
                                    title="Liked" data-nc-id="PostCardLikeAction" fdprocessedid="d937c">
                                        {/* <svg width="24"
                                        height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path   fillRule='evenodd' stroke="currentColor"strokeLinecap='round' 
                                             strokeLinejoin="round"  strokeWidth="1"
                                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                             clipRule="evenodd"></path>
                                    </svg> */}
                            <strong>Lượt xem</strong>        <span className="ml-1 text-black-600">{post.xem}</span></button>
                                {/* <a
                                    className="nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-300 transition-colors dark:text-neutral-600  hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 hidden sm:flex  px-3 h-8 text-xs focus:outline-none"
                                    title="Comments" data-nc-id="PostCardCommentBtn"
                                    href={`/blog/${post.tinID}`}><svg width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1"
                                            d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z">
                                        </path>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z">
                                        </path>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z">
                                        </path>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z">
                                        </path>
                                    </svg><span className="ml-1  dark:text-neutral-600">14</span></a> */}
                                    </div>
                            <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 "
                                data-nc-id="PostCardSaveAction"><button
                                    className="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                    data-nc-id="NcBookmark" data-nc-bookmark-post-id="DEMO_POSTS_10"
                                    title="Save to reading list" fdprocessedid="h6b39o"><svg width="24" height="24" fill="none"
                                        viewBox="0 0 24 24">
                                        <path stroke="currentColor" aria-hidden="true" fill="none" strokeLinecap="round"
                                            strokeLinejoin="round" strokeWidth="1"
                                            d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">
                                        </path>
                                    </svg></button></div>
                        </div>
                    </div>
                    <div className="block flex-shrink-0 sm:w-56 sm:ml-6 rounded-3xl overflow-hidden mb-5 sm:mb-0">
                        <div className="w-full h-0 aspect-h-9 sm:aspect-h-16 aspect-w-16 ">
                            <div className="nc-NcImage absolute inset-0" data-nc-id="NcImage"><img
                                src={`${post.urlHinh}`}
                                className="object-cover w-full h-full"
                                alt="360-degree video: How Microsoft deployed a datacenter to the bottom of the ocean" />
                            </div><span>
                                <div className="nc-PostTypeFeaturedIcon absolute left-2 bottom-2"
                                    data-nc-id="PostTypeFeaturedIcon"></div>
                            </span>
                        </div><a className="absolute inset-0" href={`/blog/${post.tinID}`}></a>
                    </div>
                </div>

            ))}
          

        </>
    );
};

export default BlogPage;
