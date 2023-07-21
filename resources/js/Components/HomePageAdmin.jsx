import React, { useState } from 'react';
import Pagination from './Pagination';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import Modal from './Modal';
import PostBlog from './FormBlog';

const HomeAdmin = ({ Blog,token }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div>
                    <button onClick={handleOpenModal}
                        className="block bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button" >
                        Thêm
                    </button>
                </div>

                {/* Render the Modal component and pass necessary props */}
                <Modal show={isModalOpen} onClose={handleCloseModal}>
                    {/* Put your modal content here */}

                    {/* <form className='container mt-10 mb-10 border-spacing-9' onSubmit={submit}>
                        <div className="mb-6">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hình</label>
                            <input type="file" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
                        </div>
                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tiêu đề</label>
                            <TextInput
                                id="title"
                                type="text"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tóm tắt</label>
                            <TextInput
                                id="tomtat"
                                type="text"
                                name="tomtat"
                                value={data.tomtat}
                                className="mt-1 block w-full"
                                autoComplete="tomtat"
                                isFocused={true}
                                onChange={(e) => setData('tomtat', e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nội dung</label>
                            <textarea name="" id="" cols="30" rows="10">nôi dung</textarea>
                        </div>

                        <button type="submit" className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form> */}
                    <PostBlog csrfToken={token}/>

                </Modal>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Hình
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tiêu đề
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lượt xem
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Ngày đăng
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thao tác
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Blog.data.map((list) => (
                            <tr key={list.tinID}>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    <img src={`/${list.urlHinh}`} alt="" width={100} height={50} />
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {list.tieuDe}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {list.xem}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {list.ngayDang}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='mt-5'>
                <Pagination blogPosts={Blog} path={'/admin'} />
            </div>
            <footer className='mt-10 h-14'>

            </footer>

        </>
    )
};
export default HomeAdmin;