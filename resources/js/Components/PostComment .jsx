import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import InputError from '@/Components/InputError';
const PostComment = ({ postId_blog, csrfToken, parent_id, hoTen }) => {
    const { data, setData, processing, errors, post } = useForm({
        content: '',
        parent_id: parent_id,
        Blogid: postId_blog
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData((prevData) => ({
            ...prevData
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send a POST request to the server to create a new comment
        post('/binhluan/', data);
    };
    console.log(parent_id);
    return (
        <div className="post-comment">

            <form className="container mt-10 mb-10 border-spacing-9 max-w-screen-md " onSubmit={handleSubmit}>
                <input type="hidden" name="_token" data-csrf-token={csrfToken} />

                <input type='text' value={hoTen} disabled />
                <input type='hidden' name="parent_id" value={data.parent_id} onChange={handleChange} />
                <input type='hidden' name="Blogid" value={data.Blogid} onChange={handleChange} />
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
                <PrimaryButton className="mt-10" disabled={false /* Add any conditions for disabling the button here */}>
                    bình luận
                </PrimaryButton>
            </form>
        </div>
    );
};

export default PostComment;
