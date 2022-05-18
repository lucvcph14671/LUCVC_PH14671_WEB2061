import { add } from "../../api/news";
import axios from "axios";
import toastr from "toastr";
import $ from 'jquery';
import "toastr/build/toastr.min.css";
const Add_new = {
    render() {
        return /*html*/ `
        <div class="w-full">
    <div class="bg-gradient-to-b h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-96">
            <p class="text-3xl font-bold leading-7 text-center">Thêm tin tức mới</p>
            <form id="form-add-new">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none">Tiêu đề</label>
                        <input id="title" type="text" name="title" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                <div class="col-span-6">
                <label class="block text-base font-medium text-gray-900">
                  Ảnh Thumbai
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Upload a file</span>
                        <input id="img"  name="img" type="file">
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <label class="font-semibold leading-none">Bài viết</label>
                        <textarea id="desc" name="desc" type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class=" btn mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Đăng bài
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
        `;
    },

    afterRender() {
        const formAdd = document.querySelector("#form-add-new");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/vucongluc/image/upload";
        const CLOUDINARY_PRESET = "fificddi";

        $("#form-add-new").validate({
            rules: {
                "title": {
                    required: true,
                    minlength: 5
                },
                "desc": {
                    required: true,
                    minlength: 5
                },
            },
            messages: {
                "title": {
                    required: "Không được để trống trường này!",
                    minlength: "Phải trên 5 kí tự",
                },
                "desc": {
                    required: "Không được để trống trường này!",
                    minlength: "Phải trên 5 kí tự",
                },
            },
            submitHandler: function() {
                async function newss() {
                    const file = imgPost.files[0];

                    const formData = new FormData();
                    formData.append("file", file);
                    formData.append("upload_preset", CLOUDINARY_PRESET);
                    const username = JSON.parse(localStorage.getItem("user")).user.username;

                    // call api cloudinary
                    const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                            headers: {
                                "Content-Type": "application/form-data"
                            }
                        })
                        // call api thêm bài viết
                    add({
                        title: document.querySelector("#title").value,
                        desc: document.querySelector("#desc").value,
                        img: data.url,
                        creator: username,
                    }).then(() => {
                        toastr.success("Thêm mới thành công , chờ 1s để chuyển trang");
                        setTimeout(() => { document.location.href = "/admin/news" }, 1000);
                    });
                }
                newss();
            }
        });
    },
};
export default Add_new;