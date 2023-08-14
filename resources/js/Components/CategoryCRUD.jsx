import React, { useState } from 'react';
import Pagination from './Pagination';
import Modal from './Modal';
import PostCategoryUpdate from './formUpdate';
import PostBlog from './FormBlog';

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return { isModalOpen, handleOpenModal, handleCloseModal };
};

const CategoryADMIN = ({ category, token, success }) => {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();


    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpenModalUpdate = (list) => {
        setSelectedRow(list);
    };

    const handleCloseModalUpdate = () => {
        setSelectedRow(false);
    };
    if (success != null) {
        alert(success);
    }

    return (
        <>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div>
                    <button onClick={handleOpenModal}
                        className="block bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button" >
                        Thêm
                    </button>
                </div>
                <Modal show={isModalOpen} onClose={handleCloseModal}>
                    <PostBlog csrfToken={token} />

                </Modal>
                <hr className="mt-5 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Tên loại
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Thứ tự
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Lang
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ẩn hiện
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((list) => (
                            <tr key={list.id}>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {list.ten}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {list.thuTu}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {(list.lang == "vi") ? "tieng viet" : "tieng anh" }
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">
                                    {(list.anHien == 1) ? "hien" : "an"}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900 ">

                                    <a href={`/blog/destroy/${list.tinID}`} className="text-black bg-red-500  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none "> Xoá</a>

                                </td>
                                <td>
                                    <div>
                                        <button
                                            onClick={() => handleOpenModalUpdate(list)}
                                            className="block bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            type="button"
                                        >
                                            sửa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {selectedRow && (
                    <Modal show={true} onClose={handleCloseModalUpdate}>
                        <div className="max-h-44" style={{ overflowY: "auto", height: "700px" }}>
                            <PostCategoryUpdate csrfToken={token} categoryID={selectedRow.id} thuTu={selectedRow.thuTu} ten={selectedRow.ten} lang={selectedRow.lang} anHien={selectedRow.anHien}/>
                        </div>
                    </Modal>
                )}
            </div>

            <footer className='mt-10 h-14'>

            </footer>

        </>
    )
};
export default CategoryADMIN;