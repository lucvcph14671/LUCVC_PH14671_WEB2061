import { edit, get } from "../../api/news";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import axios from "axios";
const Edit_new = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/ `
        <div class="w-full">
    <div class="bg-gradient-to-b h-96"></div>
    <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class="bg-white w-full shadow rounded p-8 sm:p-12 -mt-96">
            <p class="text-3xl font-bold leading-7 text-center">Sửa thông tin bài viết</p>
            <form id="form-add-new">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <label class="font-semibold leading-none">Tiêu đề</label>
                        <input id="title" value="${data.title}" type="text" class="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                <div class="col-span-6">
                <label class="block text-base font-medium text-gray-900">
                  Ảnh Thumbai
                </label>
                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1 text-center">

                    <div class="flex text-sm text-gray-600">
                      <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <img id="img-preview" class="py-4" src="${data.img}" width="800">
                      <span>Upload a file</span>
                        <input id="img" name="img" type="file">
                      </label>
                      
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
                        <textarea id="desc" type="text" class="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200">${data.desc}</textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full">
                    <button class=" btn mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                        Sửa bài viết
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
        `;
    },

    afterRender(id) {
        const formAdd = document.querySelector("#form-add-new");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img");
        let imgLink = "";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/vucongluc/image/upload";
        const CLOUDINARY_PRESET = "fificddi";

        imgPost.addEventListener('change', function(e) {
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formAdd.addEventListener("submit", async function(e) {
            e.preventDefault();
            const file = imgPost.files[0];
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
                // call api cloudinary
                const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                    headers: {
                        "Content-Type": "application/form-data"
                    }
                })
                imgLink = data.url;
            }
            // call api thêm bài viết
            edit({
                id: id,
                img: imgLink !== "" ? imgLink : imgPreview.src,
                title: document.querySelector('#title').value,
                desc: document.querySelector('#desc').value,
            }).then(() => {
                toastr.success("Sửa thành công , chờ 1s để chuyển trang");
                setTimeout(() => { document.location.href = "/admin/news" }, 1000);
            });
        });

    }
};
export default Edit_new;