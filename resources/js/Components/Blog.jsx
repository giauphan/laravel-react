
import React from 'react';

const Blog = ({ BlogID }) => {

    return (
        <>
            <div className='grid gap-6 md:gap-8 ' dangerouslySetInnerHTML={{ __html: BlogID.noiDung }}>

            </div>

        </>

    );
};

export default Blog;