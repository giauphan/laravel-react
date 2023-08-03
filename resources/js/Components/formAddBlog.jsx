import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InputError from '@/Components/InputError';

const AddBlog = ({ csrfToken }) => {
    const { data, setData, processing, errors, post } = useForm({
        hinh: null,
        title: '',
        tomtat: '',
        content: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: name === 'hinh' ? files[0] : value,
        }));
    };

    function handleSubmit(e) {
        e.preventDefault();
        // Your form submission logic goes here
        post(route('blog.add'));
    }
    return (
        <form className="container mt-10 mb-10 border-spacing-9 max-w-screen-md" onSubmit={handleSubmit}>
            <input type="hidden" name="_token" value={csrfToken} />
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
                <InputError message={errors.hinh} className="mt-2 text-red-600" />
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
                    onChange={handleChange}
                    className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="title"
                    
                />
                <InputError message={errors.title} className="mt-2 text-red-600" />
            </div>
            <div className="mb-7">
                <label htmlFor="tomtat" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Tóm tắt
                </label>
                <input
                    type="text"
                    id="tomtat"
                    name="tomtat"
                    value={data.tomtat}
                    onChange={handleChange}
                    className="mt-1 block w-full p-2.5 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="tomtat"
                    
                />
                <InputError message={errors.tomtat} className="mt-2 text-red-600" />
            </div>
            <div className="mb-8">
                <label htmlFor="noidung" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Nội dung
                </label>
                <CKEditor
                    editor={ClassicEditor}
                    data={data.content}
                    onReady={(editor) => {
                        // You can store the editor instance and use it if needed
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setData((prevState) => ({
                            ...prevState,
                            content: data,
                        }));
                    }}
                />
                <InputError message={errors.content} className="mt-2 text-red-600" />
            </div>
            <PrimaryButton className="ml-4" disabled={processing}>
              Đăng bài
            </PrimaryButton>
        </form>
    );
};

export default AddBlog;
