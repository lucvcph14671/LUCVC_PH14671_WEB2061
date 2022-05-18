import { getCountCart } from "../api/oders";
const Header = {
    render() {
        return /*html*/ `
        <div class="h-5 bg-black">

        </div>
        <div class="flex flex-wrap mx-auto items-center px-28">
            <div class="icon pt-2">
                <ul class="flex flex-wrap">
                    <li><a href=""><i class="fas fa-language text-2xl pr-4"></i></a></li>|
                    <li><a href=""><i class="fas fa-envelope-open-text text-xl px-4"></i><span>admin@gmail.com</span></a></li>
                    <li id="quyen"></li>
                </ul>
            </div>
            <img class="w-48 mt-5 mx-auto" src="./images/Hermes-symbol.jpg" alt="">
            <div class="icon2 pt-2">
                <ul class="flex flex-wrap" id="accountInfo">
                    <li><i class="far fa-user text-xl pl-3"></i><a href="/signup" class="hover:text-emerald-800 px-4">Đăng kí</a></li>|
                    <li><i class="fas fa-sign-in-alt text-xl pl-3"></i><a href="/signin" class="hover:text-emerald-800 px-4">Đăng nhập</a></li>|
                    <li><i class="fas fa-shopping-cart text-xl pl-3"></i><a href="/cart" class="hover:text-emerald-800 px-4">Giỏ hàng (${JSON.parse(localStorage.getItem('cart')) ? getCountCart().length : 0})</a></li>|
                    
                </ul>
            </div>
        </div>
        <hr class="h-1">
        <menu class="flex flex-wrap mx-auto items-center px-28 mt-4">
            <ul class="flex flex-wrap">
                <li class="px-8 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"><a href="/">Trang Chủ</a></li>
                <li class="px-8 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"><a href="/news">Tin Tức</a></li>
                <li class="px-8 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"><a href="">Liên Hệ</a></li>
                <li class="px-8 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"><a href="">Công Ty</a></li>
                <li class="px-8 text-gray-800 rounded hover:bg-gray-900 hover:text-gray-100 hover:font-medium py-2 px-2 md:mx-2"><a href="">Việc Làm</a></li>
            </ul>
            <div class="flex flex-wrap ml-auto">
            <form action="/search" class="flex flex-wrap justify-between md:flex-row"><input value="" type="search" name="query" placeholder="Thành phần tìm kiếm" class="flex-1 p-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"> <button class="flex justify-center w-full p-2 m-1 text-white transition-colors duration-200 transform rounded-md bg-primary lg:w-auto hover:bg-teal-300 outline-none bg-teal-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button></form>
            </div>
        </menu>
        <hr class="mt-4">
        `;
    },

    afterRender() {
        // lấy thông tin username từ localStorage và hiển thị ra ngoài
        const username = JSON.parse(localStorage.getItem("user")).user.username;
        const { user } = JSON.parse(localStorage.getItem("user"));
        document.querySelector('#accountInfo').innerHTML = /*html*/ `

            
            <li><i class="far fa-user text-xl pl-3"></i> Xin chào : <span class="px-2" id="accountInfo"><b>${username}</b></span></li>|
            <li><i class="fas fa-shopping-cart text-xl pl-3"></i><a href="/cart" class="hover:text-emerald-800 px-4">Giỏ hàng(${JSON.parse(localStorage.getItem('cart')) ? getCountCart().length : 0})</a></li> |
            <li> <button  class="" id="logout"><i class="fas fa-sign-in-alt text-xl px-3"></i> Đăng xuất</button></li>
            
           
        `;
        if (user) {
            if (user.permissions == 1) {
                document.querySelector('#quyen').innerHTML = /*html*/ `

                    <a href="/admin/dashboard"><i class="fas fa-envelope-open-text text-xl px-4"></i><span>Dashboard</span></a>\
                    <a href="/oder"><i class="fa-brands fa-opera text-xl px-4"></i><span>Oder</span></a>
                `;
            } else if (user.permissions == 0) {
                document.querySelector('#quyen').innerHTML = /*html*/ `

                    <a href="/oder"><i class="fa-brands fa-opera text-xl px-4"></i><span>Đơn hàng</span></a>
                `;
            }

        }
        // Logout
        const logout = document.querySelector('#logout');
        if (logout) {
            logout.addEventListener('click', function() {
                localStorage.removeItem('user');
                document.location.href = "/";
            })
        }
    }
};
export default Header;