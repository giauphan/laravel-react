import React from "react";
import Header from "./header";
import HeaderCategory from "@/Components/HeaderCategory";
import Footer from "./footer";
import { Head } from "@inertiajs/react";
import BlogView from "@/Components/BlogView";
import Pagination from "@/Components/Pagination";

const Blogcategory = ({ auth, categoryOne, blogPosts ,category}) => {
    return (
        <>
            <Head title="category Blog" />
            <Header auth={auth} categorys={category}/>

            <HeaderCategory categoryDes={categoryOne} />

            <main className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
                <div>
                    <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">

                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
                        <BlogView Blogs={blogPosts} />
                        
                    </div>
                    <div className="mt-10"> 
                    <Pagination blogPosts={blogPosts} path="category"/>
                    </div>
                   
                </div>
            </main>
            
            <Footer />
        </>
    )
}
export default Blogcategory;