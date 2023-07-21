import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';

const PostBlog = ({ csrfToken }) => {
    const { data, setData, post } = useForm({
        title: '',
        tomtat: '',
        noidung: '',
        hinh: null,
    });
console.log(csrfToken);
    // const handleChange = (e) => {
    //     const { name, value, files } = e.target;

    //     setData((prevState) => ({
    //         ...prevState,
    //         [name]: files ? files[0] : value,
    //     }));
    // };

    return (
        <form className="container mt-10 mb-10 border-spacing-9" method='post' action='/post/blog'>
            <input type="hidden" name="_token" value={csrfToken} />
            <div className="mb-6">
                <label htmlFor="hinh" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Hình
                </label>
                <input
                    type="file"
                    id="hinh"
                    name="hinh"

                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={data.hinh}
                    onChange={(e) => setData('hinh', e.target.value)}
                    required
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
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="title"

                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="tomtat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tóm tắt
                </label>
                <input
                    type="text"
                    id="tomtat"
                    name="tomtat"
                    value={data.tomtat}
                    onChange={(e) => setData('tomtat', e.target.value)}
                    className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="tomtat"

                    required
                />
            </div>
            <div className="mb-6">
                <label htmlFor="noidung" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nội dung
                </label>
                <textarea
                    id="noidung"
                    name="content"
                    value={data.noidung}
                    onChange={(e) => setData('noidung', e.target.value)}
                    className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    rows="10"

                    required
                ></textarea>
            </div>

            <PrimaryButton className="ml-4" disabled={false /* Add any conditions for disabling the button here */}>
                Đăng bài
            </PrimaryButton>
        </form>
    );
};

export default PostBlog;
