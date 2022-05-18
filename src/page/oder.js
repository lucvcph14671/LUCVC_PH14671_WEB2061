import toastr from "toastr";
import { getAll } from "../api/oders";
import "toastr/build/toastr.min.css";
const Oder = {
        async render() {
            const { user } = JSON.parse(localStorage.getItem('user'));
            const { data } = await getAll();
            const productclothes = data.filter((oders) => oders.email === user.email);
            const numberFormat = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return /*html*/ `
            <div class="bg-white rounded-md w-full">
            <div class=" flex items-center justify-between pb-6">

                </div>
                <div class="flex items-center justify-between">
                    <div class="flex bg-blue-600 text-white mx-auto p-4 rounded-md">
                    Trạng thái đơn hàng
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

                                    </tr>
                                </thead>
                                <tbody>
                                ${productclothes.map((post, index) => /*html*/ `
                                    <tr>
                                        <td class=" py-5 border-b border-gray-200 bg-white text-sm">
                                            <div class="items-center">
                                                    <div class="ml-3">
                                                        <p class="text-gray-900 whitespace-no-wrap">
                                                        #${index + 1}
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
                                                class="relative inline-block px-3 py-1 font-semibold text-teal-500 leading-tight">
                                                ${post.status == 0 ? "Chờ xử lí" : ""}
                                                ${post.status == 1 ? "Đang vận chuyển" : ""}
                                                ${post.status == 2 ? "Đang giao hàng" : ""}
                                                ${post.status == 3 ? "Hoàn thành" : ""}
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
};
export default Oder;