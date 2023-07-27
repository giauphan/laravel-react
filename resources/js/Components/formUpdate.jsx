import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PrimaryButton from '@/Components/PrimaryButton';
import { router } from '@inertiajs/react';

const PostBlogUpdate = ({ csrfToken, tieuDe, tomTat, noiDung, blogId }) => {
    const [values, setValues] = useState({
        hinh: null,
        title: tieuDe,
        tomtat: tomTat,
        content: noiDung,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setValues((prevState) => ({
            ...prevState,
            [name]: name === 'hinh' ? files[0] : value,
        }));
    };
    // console.log(blogId);
    function handleSubmit(e) {
        e.preventDefault();
        // Your form submission logic goes here
        router.put(`/admin/post/blog/${blogId}`, values);
    }

    return (
        <>
                <form className="container mt-10 mb-10 border-spacing-9 max-w-screen-md " onSubmit={handleSubmit}>
                    <input type="hidden" name="_token" data-csrf-token={csrfToken} />

                    <div className="mb-8">
                        <label htmlFor="hinh" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Hình
                        </label>
                        <input
                            type="file"
                            id="hinh"
                            name="hinh"

                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={handleChange}

                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tiêu đề
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={values.title}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            autoComplete="title"
                            required
                        />
                    </div>
                    <div className="mb-7">
                        <label htmlFor="tomtat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tóm tắt
                        </label>
                        <input
                            type="text"
                            id="tomtat"
                            name="tomtat"
                            value={values.tomtat}
                            onChange={handleChange}
                            className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            autoComplete="tomtat"
                            required
                        />
                    </div>
                    <div className="mb-8 " >
                        <label htmlFor="noidung" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nội dung
                        </label>
                        <CKEditor
                            editor={ClassicEditor}
                            data={values.content}
                            onReady={(editor) => {
                                // You can store the editor instance and use it if needed
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setValues((prevState) => ({
                                    ...prevState,
                                    content: data,
                                }));
                            }}
                        />
                    </div>

                    <PrimaryButton className="ml-4" disabled={false /* Add any conditions for disabling the button here */}>
                        Đăng bài
                    </PrimaryButton>
                </form>
           
        </>
    );
};

export default PostBlogUpdate;
