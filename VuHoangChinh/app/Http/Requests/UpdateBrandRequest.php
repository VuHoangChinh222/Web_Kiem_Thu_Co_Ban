<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBrandRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        return [
            //
            "name" => "required|min:3",

        ];
    }
    public function messages(): array
    {
        return [
            //
            "name.required" => "Name must be entered!",
            "name.min" => "Must enter a name of at least 3 characters!",
        ];
    }
}
