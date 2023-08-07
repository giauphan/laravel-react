<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Blog extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'tomtat' => 'required|string|max:255',
            'content' => 'required|string',
            'hinh' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'title.required' => 'Tiêu đề không được để trống',
            'title.string' => 'vui lòng sửa tiêu đề là chữ',
            'tomtat.string' => 'vui lòng sửa tóm tắt là chữ',
            'tomtat.required' => 'Tóm tắt không được để trống',
            'content.required' => 'nội dung không được để trống',
            'content.string' => 'vui lòng sửa nội dung là chữ',
            'hinh.required' => 'hình không được để trống',
        ];
    }
}
