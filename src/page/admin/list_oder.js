import toastr from "toastr";
import { getAll, get } from "../../api/oders";
import { edit } from "../../api/oders";
import "toastr/build/toastr.min.css";
const List_oder = {
        async render() {
            const { data } = await getAll();
            const numberFormat = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return /*html*/ `
            <div class="bg-white p-8 rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">

                </div>
                <div class="flex items-center justify-between">
                    <div class="flex bg-gray-50 items-center p-2 rounded-md">

                  </div>
                        <div class="lg:ml-40 ml-10 space-x-8">
                            
                        </div>
                    </div>
                </div>
                <div>
                    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            STT
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Khách hàng
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Địa chỉ (sđt)
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Sản phẩm 
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Số lượng
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Giá
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Tổng tiền
                                        </th>
                                        <th
                                            class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Trạng thái
                                        </th>
                                        <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Cập nhập
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                ${data.map((post, index) => /*html*/ `
                                    <tr>
                                    
                                        <td class=" py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="items-center">
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                        ${post.id}
                                                        </p>
                                                    </div>
                                                </div>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">${post.ame}</p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                            ${post.address}, ${post.phone}
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                            ${post.product}
                                            </p>
                                            </td>
                                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                            ${post.so_luong} lọ
                                            </p>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                        ${numberFormat.format(post.gia)}
                                        </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    ${numberFormat.format(post.cart_sum)}
                                    </p>
                                </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <span
                                                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                <select name="cars" id="status${index + 1}">
                                                  <option value="0"${post.status == 0 ? "selected" : ""}>Chờ xử lí</option>
                                                  <option value="1"${post.status == 1 ? "selected" : ""}>Đang vận chuyển</option>
                                                  <option value="2"${post.status == 2 ? "selected" : ""}>Đang giao hàng</option>
                                                  <option value="3"${post.status == 3 ? "selected" : ""}>Hoàn Thành</option>
                                                </select>
                                            </span>
                                        </td>
                                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                       
                                        <span
                                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                            <button id="id" type="submit" data-id="${post.id}" class="btn"><a class="px-6 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Cập nhập</a></button>
                                        </span>
                                       
                                    </td>
                                    </tr>
                                    `).join("")}
                            
                                    
                                </tbody>
                            </table>
                            <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span class="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                                <div class="inline-flex mt-2 xs:mt-0">
                                    <button
                                        class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                        Prev
                                    </button>
                                    &nbsp; &nbsp;
                                    <button
                                        class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    afterRender() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach((btn,index) => {
            // lấy ID từ thuộc tính data-id của button
            const id = btn.dataset.id;
            btn.addEventListener('click', async() => {
                const getl = await get(id);
                console.log(getl);
                const confirm = window.confirm("Bạn có muốn cập nhập trạng thái này không?");
                if(confirm){
                     // gọi hàm delete trong folder API và bắn id vào hàm
                     edit({
                        id: id,
                        ame: getl.data.ame,
                        phone: getl.data.phone,
                        address: getl.data.address,
                        dateTime: getl.data.dateTime,
                        cart_sum: getl.data.cart_sum,
                        gia: getl.data.gia,
                        so_luong: getl.data.so_luong,
                        product: getl.data.product,
                        email: getl.data.email,
                        id_product: getl.data.id_product,
                        status: document.querySelector(`#status${index +1}`).value,

                    }).then(() => {
                      toastr.success("Cập nhập thành công");
                      setTimeout(() => { document.location.href = "/admin/list_oder" }, 1000);
                    })
                }
            })
        });
    }
};
export default List_oder;