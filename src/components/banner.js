const Banner = {
    render() {
        return /*html*/ `
        <div class="w-full">
        <nav class="bg-black shadow-lg">

        </nav>
        <div class="flex bg-white" style="height:600px;">
            <div class="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
                <div>
                    <h2 class="text-3xl font-semibold text-gray-800 md:text-4xl">Nước hoa nam <span class="text-indigo-600">Paris</span></h2>
                    <p class="mt-2 text-sm text-gray-500 md:text-base">Nước hoa chính hãng là những chai nước hoa Auth nhập khẩu từ các thương hiệu dầu thơm nổi tiếng trên thế giới. Nước hoa không chỉ là mùi hương mà còn thể hiện phong cách cá tính của người dùng nó, đặc biệt hơn Nước hoa còn giúp bạn gây ấn tượng, thiện cảm với những người xunh quanh.

                    Sự tinh tế của mùi hương và ý tưởng hình thành của nhà sản xuất, Nước hoa nhập khẩu trên sàn thương mại Vua Hàng Hiệu hiện nay có 300+ chai nước hoa nữ, 150+ chai nước hoa nam và 43 chai nước hoa Unisex cho cả nam và nữ với da dạng phong cách và hương thơm.</p>
                    <div class="flex justify-center lg:justify-start mt-6">
                        <a class="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800" href="/news">Xem chi tiết</a>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block lg:w-1/2" style="clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)">
                <div class="h-full object-cover" style="background-image: url(https://res.cloudinary.com/vucongluc/image/upload/v1645195251/nuoc-hoa-tester_3_wcpjgs.jpg)">
                    <div class="h-full bg-black opacity-25"></div>
                </div>
            </div>
        </div>
    </div>
        `;
    },
};
export default Banner;