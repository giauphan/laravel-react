import React, { useState } from 'react';
import Pagination from './Pagination';
import Modal from './Modal';
import PostBlog from './FormBlog';
import AddBlog from './formAddBlog';

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

const HomeAdmin = ({ Blog, token, success ,errors,input}) => {
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();


    const [selectedRow, setSelectedRow] = useState(null);

    const handleOpenModalUpdate = (list) => {
        setSelectedRow(list);
    };

    const handleCloseModalUpdate = () => {
        setSelectedRow(false);
    };
    const [values, setValues] = useState({
        hinh: 'd',
        title: '',
        tomTat: '',
        content: '',
    });
    if (errors.length > 0) {
        setValues({
            ...values,
            hinh: errors.hinh,
          });
// console.log(success);
    }
    console.log(values.hinh);
    console.log(errors.length);


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

                {/* Render the Modal component and pass necessary props */}
                <Modal show={isModalOpen} onClose={handleCloseModal}>
                    {/* Put your modal content here */}
                    <div className="max-h-44" style={{ overflowY: "auto", height: "700px" }}>
                    <AddBlog csrfToken={token} />
                    </div>
                 

                </Modal>
                <hr className="mt-5 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
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
                                    <img src={`${list.urlHinh}`} alt="" width={100} height={50} />
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
                        <h1>Home</h1>
                        <div className="max-h-44" style={{ overflowY: "auto", height: "700px" }}>
                            <PostBlog csrfToken={token} blogId={selectedRow.tinID} tieuDe={selectedRow.tieuDe} noiDung={selectedRow.noiDung} tomTat={selectedRow.tomTat} />
                        </div>
                    </Modal>
                )}
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