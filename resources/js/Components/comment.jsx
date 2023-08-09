import React, { useState } from 'react';
import PostComment from './PostComment ';
import Modal from './Modal';
const Comment = ({ comment, level = 0, token = null, postId }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    const postId_blog = postId;
    const handleOpenModalUpdate = (list) => {
        setSelectedRow(list);
    };

    const handleCloseModalUpdate = () => {
        setSelectedRow(false);
    };
    //    console.log(first)
    return (
        <>
            <div className="comment">
                <strong>{comment.hoTen}</strong>
                <div dangerouslySetInnerHTML={{ __html: comment.noiDung }}></div>
                <button
                    onClick={() => handleOpenModalUpdate(comment)}
                    className="block bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                >
                    Bình luận
                </button>
                {comment.replies && (
                    <div className="ml-10">
                        {comment.replies.map(reply => (
                            <Comment key={reply.id} comment={reply} />
                        ))}
                    </div>
                )}
                {comment.length > 0 && (
                    <div className="mainconment">
                        {comment.map(reply => (
                            <Comment key={reply.id} comment={reply} level={level + 1}  />
                        ))}
                    </div>
                )}
            </div>

            {selectedRow && (
                <Modal show={true} onClose={handleCloseModalUpdate}>

                    <div className="max-h-44" style={{ overflowY: "auto", height: "700px" }}>
                        <h2 className='text-center'>Post a Comment</h2>
                        <PostComment parent_id={(selectedRow.parent_id ? selectedRow.parent_id : selectedRow.id )} hoTen={selectedRow.hoTen} postId_blog={!selectedRow.idTin ? postId : selectedRow.idTin} csrfToken={token} />
                    </div>
                </Modal>
            )}
        </>
    );
};

export default Comment;