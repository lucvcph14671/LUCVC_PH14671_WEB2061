import { getAll, remove } from "../../api/products";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Product = {
        async render() {
            const { data } = await getAll();
            const numberFormat = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return /*html*/ `
        <div class="flex flex-col pb-14">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 ">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg ">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STT
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nước hoa
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giá
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Dung tích
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Ảnh
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mô tả
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Danh mục
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                ${data.map((post, index) => /*html*/ `
                  <tr>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                      #${index+1}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                      ${post.title}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                    ${numberFormat.format(post.price)}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                      ${post.capacity}ml
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                      <img src="${post.img}" >
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black w-5">
                      ${post.desc}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-black">
                      ${post.category}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button data-id="${post.id}" class="btn"><a class="px-6 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-500 text-black">Xóa</a></button>
                      <a href="/admin/edit/product/${post.id}" class="px-6 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Sửa</a>
                    </td>
                  </tr>
                  `).join("")}
                  <!-- More people... -->
                </tbody>
              </table>
              </div>
              </div>
            </div>
        `;
    },
    afterRender(){
      // lấy danh sách button sau khi render
      const buttons = document.querySelectorAll('.btn');
      // tạo vòng lặp cho nodelist button
      buttons.forEach(btn => {
          // lấy ID từ thuộc tính data-id của button
          const id = btn.dataset.id;
          btn.addEventListener('click', () => {
              const confirm = window.confirm("Bạn có muốn xóa bài viết này không?");
              if(confirm){
                   // gọi hàm delete trong folder API và bắn id vào hàm
                  remove(id).then(() => {
                    toastr.success("Xóa thành công , chờ 2s để chuyển trang");
                    setTimeout(() => { document.location.href = "/admin/product" }, 2000);
                  })
              }
          })
      });
  }
};
export default Product;