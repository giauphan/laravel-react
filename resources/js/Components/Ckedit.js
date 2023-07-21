import { CKEditor } from "@ckeditor/ckeditor5-react";
import React from "react";

const Ckedit = () => {
    document.querySelectorAll('.editor').forEach(function (element) {
        // Check if the element is valid before replacing with CKEditor
        if (element instanceof HTMLElement) {
            CKEditor.replace(element, {
                extraPlugins: 'easyimage',
                removePlugins: 'image',
                cloudServices_tokenUrl: 'http://localhost:8000/',
                cloudServices_uploadUrl: 'http://localhost:8000/upload-image',

                UploadUrl: "/uploadfile",
                filebrowserUploadUrl: '/upload-image',
            });
            CKEditor.editorConfig = function (config) {
                config.extraPlugins = 'easyimage';
            };
        }
    });
}
export default Ckedit;