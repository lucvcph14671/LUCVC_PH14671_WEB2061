import {get } from "../api/products";
import { getAll } from "../api/products";
import toastr from "toastr";
import { addTocart } from "../util/cart";
import "toastr/build/toastr.min.css";
const Detail = {
        async render(id) {
            const { data } = await get(id);
            const data_all = await getAll(id);
            const numberFormat = new Intl.NumberFormat('vi-VN', {
                style: 'currency',
                currency: 'VND',
            });
            return /*html*/ `
<div class="flex container mx-auto">
<div class="pr-40">
    <div class="text-center mx-auto py-6">
        <a href="">
            <img src="${data.img}" width="460" height="460">
        </a>
    </div>
    <div class="wp-listthumb relative mb-10px">
        <div class="list-thumbs owl-loaded owl-drag">
            <div class="flex py-7 mx-auto">
                <div class="w-25 h-25">
                    <a href="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-3.jpg" class="" data-fancybox="images" rel="lightbox">
                        <img src="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-3-150x150.jpg" alt="">
                    </a>
                </div>
                <div class="w-25 h-25">
                    <a href="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme.jpg" class="" data-fancybox="images" rel="lightbox">
                        <img src="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-150x150.jpg" alt="">
                    </a>
                </div>
                <div class="w-25 h-25">
                    <a href="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-2.jpg" class="" data-fancybox="images" rel="lightbox">
                        <img src="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-2-150x150.jpg" alt="">
                    </a>
                </div>
                <div class="w-25 h-25">
                    <a href="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-2.jpg" class="" data-fancybox="images" rel="lightbox">
                        <img src="https://perfume168.com/wp-content/uploads/2021/11/Afnan-Supremacy-Pour-Homme-2-150x150.jpg" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="col-sm-7 col-ms-6 info-product w-full">
    <h1 class="text-2xl py-5">${data.title}</h1>
    <div class="text-xl pb-5">
        <a href="" rel="tag">${data.desc}</a>
    </div>
    <hr>
    <table>
        <tbody>
            <tr>
                <th class="text-blue-500 pr-8">Dung tích</th>
                <td class="italic">
                    <p>${data.capacity}ml</p>
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
    <div class="text-xl text-red-500 py-5">
        <b>${numberFormat.format(data.price)}</b><br>
        <a href="javascript:void(0)" class="hover:text-gray-800 dark:text-gray-400 focus:outline-none focus:text-black hover:underline text-sm leading-3 text-gray-600 cursor-pointer">${data.like} Lượt xem</a>
    </div>

        <div class="other-buy custom-buy">
            <div class="quantity">
                <span title="bớt" class="sub-qty btn"><i class="fa fa-minus" aria-hidden="true"></i></span>
                <input id="inputValue" value="1" class="text-center" type="number" min="1">
                <span title="thêm" class="add-qty btn"><i class="fa fa-plus" aria-hidden="true"></i></span>
            </div>
            <button id="btnAddToCart" data-id="${data.id}" class="border w-full py-2 my-5 bg-black rounded-xl text-white hover:text-black hover:bg-slate-300"><b>Thêm Vào Giỏ Hàng</b></button>
        </div>

        <div class="clearfix"></div>

    <div class=" bg-slate-200 py-5 mx-auto ">
        <div class="flex flex-wrap px-9">
            <div class="  ">
                <img src="https://perfume168.com/wp-content/themes/netsa.vn/images/giao-hang.jpg " alt="bảo hành " class="mx-auto pb-4 ">
                <a href=" ">Chính Sách Bảo Hành</a>
            </div>
            <div class="mx-auto">
                <img src="https://perfume168.com/wp-content/themes/netsa.vn/images/doi-tra.png " alt="đổi trả " class="mx-auto pb-4 ">
                <a href=" ">Đổi Trả 15 Ngày</a>
            </div>
            <div class="col-sm-4 ">
                <img src="https://perfume168.com/wp-content/themes/netsa.vn/images/100.png " alt="cam kết chính hãng " class="mx-auto pb-3 ">
                <a href=" ">Cam Kết Chính Hãng</a>
            </div>
        </div>
    </div>

    <!-- end .cs -->
    <div class="mt-7 text-center ">
        <a href="tel:09 789 42425 " class="border bg-red-500 p-3 rounded-xl text-white"><i class="fa fa-phone "></i> Gọi Mua Hàng: 09 789 42425</a>
    </div>

</div>
</div>
    
    <div class="text-center text-4xl my-6 bg-black">
        <hr class="mb-10">
            <h1 class="pb-10 text-white">Sản phẩm liên quan</h1>
        <hr class="mb-10">
    </div>
    <div class="flex flex-wrap px-16">
    ${data_all.data.map((post) => /*html*/ `
        <div class="text-center w-80 border border-separate py-4 mx-auto p-1 bg-slate-50">
            <div class="pt-5"> 
                <img class="h-72 w-72 pb-2 mx-auto" src="${post.img}" alt="">
                <hr>
                <p class="text-xl py-2">${post.title}</p>
                <p class="text-base">${post.desc}</p>
            </div>
            <div class="md:w-4/12 w-full text-center mx-auto">
      <div class="flex space-x-2 md:mt-0 mt-10">
        <svg class="cursor-pointer dark:text-white text-gray-800" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z" fill="currentColor" />
        </svg>
        <svg class="cursor-pointer dark:text-white text-gray-800" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z" fill="currentColor" />
        </svg>
        <svg class="cursor-pointer dark:text-white text-gray-800" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z" fill="currentColor" />
        </svg>
        <svg class="cursor-pointer dark:text-white text-gray-800" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z" fill="currentColor" />
        </svg>
        <svg class="cursor-pointer dark:text-white text-gray-800" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0962 18.2498C14.9496 18.2504 14.805 18.2158 14.6745 18.149L9.99954 15.7015L5.32454 18.149C5.17273 18.2288 5.00157 18.2644 4.83052 18.2518C4.65947 18.2392 4.49539 18.1789 4.35693 18.0776C4.21847 17.9764 4.11118 17.8384 4.04727 17.6792C3.98335 17.5201 3.96537 17.3462 3.99537 17.1773L4.91204 12.0164L1.13537 8.34978C1.01754 8.2322 0.933954 8.08475 0.89358 7.92325C0.853207 7.76176 0.857571 7.59232 0.906205 7.43312C0.959335 7.2702 1.05707 7.12544 1.18831 7.01526C1.31955 6.90508 1.47905 6.8339 1.6487 6.80978L6.8737 6.04895L9.17454 1.34645C9.2496 1.19146 9.3668 1.06076 9.51271 0.969306C9.65862 0.877851 9.82734 0.829346 9.99954 0.829346C10.1717 0.829346 10.3405 0.877851 10.4864 0.969306C10.6323 1.06076 10.7495 1.19146 10.8245 1.34645L13.1529 6.03978L18.3779 6.80062C18.5475 6.82473 18.707 6.89591 18.8383 7.00609C18.9695 7.11627 19.0672 7.26103 19.1204 7.42395C19.169 7.58315 19.1734 7.75259 19.133 7.91408C19.0926 8.07558 19.009 8.22303 18.8912 8.34062L15.1145 12.0073L16.0312 17.1681C16.0639 17.34 16.0468 17.5176 15.9818 17.68C15.9169 17.8425 15.8068 17.9829 15.6645 18.0848C15.4985 18.2011 15.2987 18.2591 15.0962 18.2498Z" fill="currentColor" />
        </svg>
        <p class="text-gray-600 text-base dark:text-gray-400 leading-4 font-normal">5/5</p>
      </div>
      <a href="javascript:void(0)" class="hover:text-gray-800 dark:text-gray-400 focus:outline-none focus:text-black hover:underline text-sm leading-3 text-gray-600 cursor-pointer">${post.like} Views</a>
    </div>
            <div class="flex flex-wrap px-3 pt-7">
                <span class="text-xl "><u>${post.price} - VND</u></span>
                <a class="ml-auto" href="/product/detail/${post.id}" ><button class="border ml-auto py-2 rounded-md pl-4 border-none bg-black text-white px-4  hover:bg-teal-300 hover:text-white">Mua Ngay</button></a>
            </div>
        </div>
        `).join("")}
</div>
    </div>
    </div>
`;
    },

    afterRender(id) {
        const btnAddToCart = document.querySelector('#btnAddToCart');
        // const { id } = btnAddToCart.dataset;
        const inputValue = document.querySelector('#inputValue');
        btnAddToCart.addEventListener('click', async() => {
            const { data } = await get(id);
            console.log(data);
            addTocart({...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success("Đã thêm sản phẩm vào giỏ hàng");
            })
        })
    }
};
export default Detail;