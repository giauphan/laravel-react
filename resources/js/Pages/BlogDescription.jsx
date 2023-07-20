import Blog from "@/Components/Blog";
import NavCategory from "@/Components/NavCategory";
import HeaderBlog from "@/Components/headerBlog";
import { Head } from "@inertiajs/react";
import React from "react";
import Header from "./header";
import Footer from "./footer";


const Description = ({ blogPosts, category ,auth}) => {
    return (
        <>
            <Head title='chi tiết bài viết' />
            <Header auth={auth} categorys={category}/>
            <HeaderBlog BlogID={blogPosts}>

            </HeaderBlog>
            <main className="container relative mt-16">
                <div className='nc-SectionLatestPosts relative pb-16 lg:pb-28'>
                    <div className='flex flex-col lg:flex-row'>
                        <div className='w-full lg:w-3/5 xl:w-2/3 xl:pr-14'>
                            {/* <div className='nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50'>
                                <div className="max-w-2xl"><h2 className="text-3xl md:text-4xl text-neutral-500 font-semibold">Bài viết mới 🎈</h2><span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Khám phá những bài viết nổi bật nhất trong tất cả các chủ đề của cuộc sống.</span></div>
                            </div> */}
                            <Blog BlogID={blogPosts}>

                            </Blog>
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
            <Footer />
        </>
    )

}
export default Description;