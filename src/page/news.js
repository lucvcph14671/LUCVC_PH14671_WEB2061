import { getAll } from "../api/news";

const News = {
        async render() {
            const { data } = await getAll();
            return /*html*/ `
    <section class="container mx-auto">
        <b> <h3 class="text-lg"> Tin tức >> </h3> <hr class="w-20"> </b>
        <h3 class="text-xl pt-3 text-blue-700"> Cập nhật thông tin tin tức, hình ảnh, video clip mới nhất, nhanh nhất và đầy đủ nhất về chủ đề nước hoa. Mời các bạn đón đọc các bài viết về nước hoa và chia sẻ thông tin nước hoa trên  </h3> 
        <div class="flex pt-10 mx-auto">
        ${data.map((post) => /*html*/ `
            <div>
                <article class="border-2 text-center pb-10 mx-3">
                <a href="" title="Gợi ý mẹo giúp bạn tạo mùi hương tự nhiên cho cơ thể, loại bỏ mùi hôi khó chịu"><img class="w-full h-72" src="${post.img}" alt="Gợi ý mẹo giúp bạn tạo mùi hương tự nhiên cho cơ thể, loại bỏ mùi hôi khó chịu"></a>
                <h3 class="text-xl py-5" ><b>${post.title}</b></h3>
                <p><i class="fa-solid fa-audio-description"></i> Đăng bởi: ${post.creator} <i class="fa-solid fa-calendar-days"></i> Ngày: 2022</p>
                <p class="text-lg py-5">${post.desc}</p>
                <a href="/new/detail/${post.id}" ><button type="button" class="border px-8 py-2 bg-slate-200 hover:bg-teal-300 hover:text-white">Đọc Thêm</button></a>
                
                </article>
            </div>  
        `).join("")}
            
        </div>  
        </div>
    </section>
        `;
    },
};
export default News;