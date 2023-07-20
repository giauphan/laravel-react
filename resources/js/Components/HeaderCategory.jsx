import React from "react";

const HeaderCategory = ({ categoryDes }) => {
 
    return (
        <>
            <div className="w-full px-2 xl:max-w-screen-2xl mx-auto">
                <div
                    className="rounded-3xl md:rounded-[40px] relative aspect-w-16 aspect-h-13 sm:aspect-h-9 lg:aspect-h-8 xl:aspect-h-5 overflow-hidden ">
                    <div className="nc-NcImage absolute inset-0" data-nc-id="NcImage"><img
                        src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        className="object-cover w-full h-full" alt="nc-imgs" /></div>
                    <div className="absolute inset-0 bg-black text-white bg-opacity-30 flex flex-col items-center justify-center">
                        <h2 className="inline-block align-middle text-5xl font-semibold md:text-7xl ">{categoryDes.ten}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderCategory;