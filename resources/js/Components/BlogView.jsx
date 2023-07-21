import React from "react";
import formatDate from "./FormartTime";
const BlogView = ({ Blogs }) => {

    return (
        <>
            {Blogs.data.map((view, index) => (
                <div className="nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] h-full"
                    data-nc-id="Card11">
                    <div className="block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden aspect-w-4 aspect-h-3">
                        <div>
                            <div className="nc-PostFeaturedMedia relative  w-full h-full " data-nc-id="PostFeaturedMedia">
                                <div className="nc-NcImage absolute inset-0" data-nc-id="NcImage"><img
                                    src={`/${view.urlHinh}`}
                                    className="object-cover w-full h-full" alt="nc-imgs" /></div>
                                <div className="absolute inset-0"></div>
                            </div>
                        </div>
                    </div><a className="absolute inset-0"   href={`/blog/${view.tinID}`}></a><span
                        className="absolute top-3 inset-x-3 z-10">
                        <div className="nc-CategoryBadgeList flex flex-wrap space-x-2" data-nc-id="CategoryBadgeList"><a
                            className="transition-colors hover:text-white duration-300 nc-Badge relative inline-flex px-2.5 py-1 rounded-full font-medium text-xs  text-yellow-800 bg-yellow-100 hover:bg-yellow-800"
                            href={`/blog/${view.tinID}`}>{view.ten}</a></div>
                    </span>
                    <div className="p-4 flex flex-col flex-grow space-y-3">
                        <div className="nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 text-xs leading-none"
                            data-nc-id="PostCardMeta"><span
                                className="text-neutral-500 dark:text-neutral-400 font-normal">{formatDate(view.ngayDang)}</span></div>
                        <h2 className="nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 "><a
                            className="line-clamp-2" title="Lenovo’s smarter devices stoke professional passions "
                              href={`/blog/${view.id}`}>{view.tieuDe} </a>
                        </h2>
                        <div className="flex items-end justify-between mt-auto">
                            <div className="nc-PostCardLikeAndComment flex items-center space-x-2 relative"
                                data-nc-id="PostCardLikeAndComment"><button
                                    className="nc-PostCardLikeAction relative min-w-[68px] flex items-center rounded-full leading-none group transition-colors px-3 h-8 text-xs focus:outline-none text-rose-600 bg-rose-50 dark:bg-rose-100"
                                    title="Liked" data-nc-id="PostCardLikeAction"><svg width="24" height="24" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path fill-rule="evenodd" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1"
                                            d="M11.995 7.23319C10.5455 5.60999 8.12832 5.17335 6.31215 6.65972C4.49599 8.14609 4.2403 10.6312 5.66654 12.3892L11.995 18.25L18.3235 12.3892C19.7498 10.6312 19.5253 8.13046 17.6779 6.65972C15.8305 5.18899 13.4446 5.60999 11.995 7.23319Z"
                                            clip-rule="evenodd"></path>
                                    </svg><span className="ml-1 text-rose-600">{view.xem}</span></button></div>
                            <div className="nc-PostCardSaveAction flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 relative"
                                data-nc-id="PostCardSaveAction"><button
                                    className="nc-NcBookmark relative rounded-full flex items-center justify-center focus:outline-none h-8 w-8 bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                    data-nc-id="NcBookmark" data-nc-bookmark-post-id="DEMO_POSTS_1"
                                    title="Save to reading list"><svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" aria-hidden="true" fill="none" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="1"
                                            d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z">
                                        </path>
                                    </svg></button></div>
                        </div>
                    </div>
                </div>
            )

            )}

        </>
    )
}
export default BlogView;