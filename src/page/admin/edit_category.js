import { edit, get } from "../../api/category";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Edit_category = {
    async render(id) {
        const { data } = await get(id);
        return /*html*/ `
        <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1 pl-2 pt-5">
            <div class="px-4 sm:px-0">
              <h3 class="text-lg font-medium leading-6 text-gray-900">Sửa danh mục</h3>
              <p class="mt-10 text-sm text-gray-600">
              <span>1. Trong trang quản trị Hemes paris, vào Sản phẩm. </span><br>
              <span>2. Trên trang Sản phẩm, nhấp vào Thêm sản phẩm. </span><br>
              <span>3. Nhập tiêu đề cho sản phẩm cùng các thông tin chi tiết bổ sung. </span><br>
              <span>4. Nhấp vào Lưu. </span><br>
              </p>
            </div>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="formCategory">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div>
                    <label for="about" class="block text-sm font-medium text-gray-700">
                      Tên danh mục nước hoa
                    </label>
                    <div class="mt-1">
                      <textarea id="category" name="about" rows="3" class="p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="Vd: Nước hoa nam">${data.category}</textarea>
                    </div>
                    <p class="mt-2 text-sm text-gray-500">
                      Nhập đầy đủ thông tin trước khi Lưu.
                    </p>
                  </div>
      
    
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Lưu
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
    //
    afterRender(id) {
        // edit
        const formCategory = document.querySelector('#formCategory');
        formCategory.addEventListener('submit', (e) => {
            e.preventDefault();
            edit({
                id: id,
                category: document.querySelector('#category').value,
            }).then(() => {
                toastr.success("Sửa thành công , chờ 1s để chuyển trang");
                setTimeout(() => { document.location.href = "/admin/category" }, 1000);
            });
        });
    }
};
export default Edit_category;