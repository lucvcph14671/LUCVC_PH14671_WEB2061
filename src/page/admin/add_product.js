import axios from "axios";
import { add } from "../../api/products";
import { getAll } from "../../api/category";
import toastr from "toastr";
import $ from 'jquery';
import "toastr/build/toastr.min.css";
import Product from "./product";
const Add_product = {
        async render() {
            const { data } = await getAll();
            return /*html*/ `
      
      <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1 pl-2 pt-5">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Thêm mới sản phẩm</h3>
          <p class="mt-1 text-sm text-gray-600">
          <span>1. Trong trang quản trị Hemes paris, vào Sản phẩm. </span><br>
          <span>2. Trên trang Sản phẩm, nhấp vào Thêm sản phẩm. </span><br>
          <span>3. Nhập tiêu đề cho sản phẩm cùng các thông tin chi tiết bổ sung. </span><br>
          <span>4. Nhấp vào Tạo mới. </span><br>
          </p>
        </div>
      </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="form-add-post">
              <div class="shadow overflow-hidden sm:rounded-md">
                <div class="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Nhập tên sản phẩm</label>
                      <input type="text"  name="title" id="title" autocomplete="given-name" class="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-4">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Mô tả</label>
                    <textarea id="desc"  name="desc" rows="3" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Vd: Đây là dòng nước hoa cao cấp"></textarea>
                    </div>
      
                    <div class="col-span-6 sm:col-span-3">
                      <label for="country" class="block text-sm font-medium text-gray-700">Danh mục</label>
                      <select id="category" name="category" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      ${data.map((post) => /*html*/ `
                        <option value="${post.category}">${post.category}</option>
                      `).join("")}
                      </select>
                    </div>

                    <div class="col-span-6">
                    <label class="block text-sm font-medium text-gray-700">
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
      
                    <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label for="city" class="block text-sm font-medium text-gray-700">Giá</label>
                      <input type="text"  name="price" id="price" autocomplete="address-level2" class="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
      
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label for="region" class="block text-sm font-medium text-gray-700">Dung tích (ml)</label>
                      <input type="text"  name="capacity" id="capacity" autocomplete="address-level1" class="p-1 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    </div>
                  </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class=" btn inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Tạo mới
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr>

        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add-post");
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#img");
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/vucongluc/image/upload";
        const CLOUDINARY_PRESET = "fificddi";

        $("#form-add-post").validate({
          rules: {
              "title": {
                  required: true,
                  minlength: 5
              },
              "desc": {
                  required: true,
                  minlength: 5
              },
              "category": {
                required: true,
            },
            "price": {
              required: true,
              number: true,
              minlength: 5
          },
          "capacity": {
            required: true,
            number: true,
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
              "category": {
                required: "Không được để trống trường này!",
            },
            "price": {
              required: "Không được để trống trường này!",
              minlength: "Phải trên 5 kí tự",
              number: "Phải là số",
          },
          "capacity": {
            required: "Không được để trống trường này!",
            number: "Phải là số",
        },
          },
          submitHandler: function() {
              async function product() {
                const file = imgPost.files[0];

                const formData = new FormData();
                formData.append("file", file);
                formData.append("upload_preset", CLOUDINARY_PRESET);
    
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
                    category: document.querySelector("#category").value,
                    img: data.url,
                    price: document.querySelector("#price").value,
                    capacity: document.querySelector("#capacity").value,
                    like: 0
                }).then(() => {
                    toastr.success("Thêm mới thành công , chờ 1s để chuyển trang");
                    setTimeout(() => { document.location.href = "/admin/product" }, 1000);
                });
              }
              product();
          }
      });

    },
};
export default Add_product;