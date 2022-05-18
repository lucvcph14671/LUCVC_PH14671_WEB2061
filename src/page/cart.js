import { reRender } from "../util";
import swal from "sweetalert";
import { add } from "../api/oders";
import { cart_sum, decreaseQuantity, increaseQuantity, removeItemInCart } from "../util/cart";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Cart = {
        render() {
            let cart = [];
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            const numberFormat = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            var today = new Date();
            var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var dateTime = date + ' ' + time;
            return /*html*/ `
            <form id="formOder">
            <div class="flex">
            <div class=" w-2/3 lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800 overflow-x-hidden lg:h-screen h-auto" id="scroll">
            <div class=" items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
              <p class="text-sm pl-2 leading-none dark:hover:text-gray-200">< Back</p>
            </div>
            <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3">Giỏ hàng</p>


            <div class=""> 
            ${cart.map(item =>/*html*/ `
            
            <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">

              <div class="md:w-4/12 2xl:w-1/4 w-full">
                <img src="${item.img}" alt="Black Leather Purse" class="h-full object-center object-cover md:block hidden">
              </div>
              <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center pl-5">
                <p class="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">Mã: ${item.id}</p>
                <div class="flex items-center justify-between w-full">
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">${item.title}</p>
                  <div class=" dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
                  <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                  <button data-id="${item.id}" class="btn btn-decrease focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  </button>
                  <p> ${item.quantity} </p>
                  <button data-id="${item.id}" class="btn btn-increase focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
              </div>
                  </div>
                </div>
                <p class="text-xs leading-3 text-gray-600 dark:text-white pt-2">Dung tích: ${item.capacity} ml</p>
                <p class="text-xs leading-3 text-gray-600 dark:text-white py-4">Giá: ${numberFormat.format(item.price)}</p>
                <p class="w-96 text-xs leading-3 text-gray-600 dark:text-white">Loại: ${item.category} </p>
                <div class="flex items-center justify-between pt-5">
                  <div class="flex itemms-center">
                    <p class="text-xs leading-3 text-gray-800 dark:text-white cursor-pointer">Mô tả: ${item.desc}</p>
                    <button data-id="${item.id}" class="btn btn-remove px-2"> <p class="text-lg leading-3 text-red-500 pl-5 cursor-pointer">Xóa</p></button>
                  </div>
                  <p class="text-base font-black leading-none text-gray-800 dark:text-white">${numberFormat.format(item.quantity * item.price)}</p>
                </div>
              </div>
            </div>
            `).join("")}
          </div>
          </div>
          
          <div class="rounded-md relative w-1/3 shadow-2xl p-3 mt-32 mb-24 mx-10 bg-white">
          <div class="py-2">
            <div class="text-center text-xl font-bold">ĐƠN HÀNG</div>
            <div class="text-center text-xs font-bold">Chi tiết đơn hàng</div>
          </div>
          <div class="text-center text-xs font-bold mb-1">~~~~~~~~~~~~~~~~~~~~~~~~~~~~</div>
          <div class="text-xs pl-2">
            <div class="text-xs mb-1">Khách hàng : <input typy="text" required class="p-1 border ml-16 w-2/3" id="name" placeholder="Tên của bạn"></div>
            <div class="text-xs mb-1">Sđt  :<input typy="text" required class="p-1 border ml-28 w-2/3" id="phone" placeholder="Số điện thoại"></div>
            <div>Địa chỉ nhận hàng：<input typy="text" required class="p-1 border ml-7 w-2/3" id="address" placeholder="Địa chỉ"></div>
          </div>
          <div class="border-double border-t-4 border-b-4 border-l-0 border-r-0 border-gray-900 my-3">
            <div class="flex text-sm pt-1 px-1">
              <span class="w-2/6">Sản Phẩm</span>
              <span class="w-2/6 text-right">Giá</span>
              <span class="w-2/6 text-right">Thành tiền</span>
              <span class="w-2/6 text-right">Số Lượng</span>
            </div>
            <div class="border-dashed border-t border-b border-l-0 border-r-0 border-gray-900 mt-1 my-2 py-2 px-1">
            ${cart.map(item =>/*html*/ `
              <div class="flex justify-between text-sm">
                <span class="w-2/6 truncate">${item.title}</span>
                <span class="w-2/6 text-right">${numberFormat.format(item.price)}</span>
                <span class="w-2/6 text-right">${numberFormat.format(item.quantity * item.price)}</span>
                <span class="w-2/6 text-right">${item.quantity}</span>
              </div>
              `).join("")}
            </div>
          </div>
          <div class="text-xs">
            <div class="mb-1">Phí vận chuyển：Miễn phí.</div>
            <div class="mb-2">VAT：--Nhận hàng khi thanh toán.</div>
            <div class="text-right">
              <div id="hvn">Time：${dateTime}</div>
              <input type="hidden" id="dateTime" value="${dateTime}">
              <div class="font-bold text-sm">Tổng Tiền：${numberFormat.format(cart_sum())}</div>
              <input type="hidden" id="cart_sum" value="${numberFormat.format(cart_sum())}">
            </div>
            <hr>
            <div class="p-4 justify-center flex">
                      <button class="add_oder text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">Đặt hàng</button>
                  </div>
          </div>

          
            </div>
            
 </form>

        `;
    },
    
    afterRender() {
        const btns = document.querySelectorAll('.btn');
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', () => {
                if (btn.classList.contains('btn-increase')) {
                    increaseQuantity(id, () => {
                        reRender(Cart, "#main");
                        toastr.success("Tăng số lượng thành công");
                    })
                } else if (btn.classList.contains('btn-decrease')) {
                    decreaseQuantity(id, () => {
                        reRender(Cart, "#main");
                        toastr.success("Giảm số lượng thành công");
                    })
                } else {
                    removeItemInCart(id, () => {
                        reRender(Cart, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    })
                }
            })
        })
        const add_oder = document.querySelectorAll('.add_oder');
        const formOder = document.querySelector('#formOder');
        formOder.addEventListener('submit', (e) => {
          e.preventDefault();
          swal({
            title: "Bạn chắc chán muốn đặt hàng?",
            text: "Kiểm tra, địa chỉ nhận hàng số điện thoại!",
            icon: "success",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              const oder = JSON.parse(localStorage.getItem('cart'));
              const{user} = JSON.parse(localStorage.getItem('user'));
              oder.forEach((item) => {
                add({
                  ame: document.querySelector('#name').value,
                  phone: document.querySelector('#phone').value,
                  address: document.querySelector('#address').value,
                  dateTime: document.querySelector('#dateTime').value,
                  cart_sum: item.price * item.quantity,
                  gia : item.price,
                  so_luong : item.quantity,
                  product : item.title,
                  id_product: item.id,
                  status: 0,
                  email: user.email,
                }).then(() => {
                  toastr.success("Mua hàng thành thành công , Đơn hàng sẽ sớm được vận chuyển tới bạn");
                  setTimeout(() => { document.location.href = "/oder" }, 1000);
              });
            })
            }
          });
            
            
        });
    }
};
export default Cart;