import { getAll, remove } from "../../api/news";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const List_news = {
        async render() {
            const { data } = await getAll();
            return /*html*/ `

            <section class=" lg:pb-20 bg-[#F3F4F6]">
            <h3 class="p-10 text-blue-500">
            <div class="flex items-center">
            <b>Tin Tức</b>>>>
            <a href="/admin/add/new" class="hidden sm:inline-flex ml-5 text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center mr-3">
               Thêm tin tức 
            </a>
         </div>
            </h3>
            
            <div class="container">
           
               <div class="flex flex-wrap -mx-4">
               ${data.map((post) => /*html*/ `
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                        <div class="bg-white rounded-lg overflow-hidden mb-10">
                            <img src="${post.img}" alt="image" class="w-full" />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                           <h3>
                              <a
                                 href="javascript:void(0)"
                                 class="
                                 font-semibold
                                 text-dark text-xl
                                 sm:text-[22px]
                                 md:text-xl
                                 lg:text-[22px]
                                 xl:text-xl
                                 2xl:text-[22px]
                                 mb-4
                                 block
                                 hover:text-primary
                                 "
                                 >
                                 ${post.title}
                              </a>
                           </h3>
                           <p class="text-base text-body-color leading-relaxed mb-7">
                           ${post.desc}
                           </p>
                           <a
                              href="/admin/edit/new/${post.id}"
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-full
                              text-base text-body-color
                              font-medium
                              hover:border-primary hover:bg-primary hover:text-blue-600
                              transition
                              "
                              >
                           Chỉnh Sửa
                           </a>
                           <button data-id="${post.id}" class="btn"><a
                           class="
                           inline-block
                           py-2
                           px-7
                           border border-[#E5E7EB]
                           rounded-full
                           text-base text-body-color
                           font-medium
                           hover:border-primary hover:bg-primary hover:text-red-600
                           transition
                           "
                           >
                        Xóa
                        </a></button>
                        </div>
                     </div>
                     
                  </div>
                  `).join("")}
               </div>
            </div>
         </section>
         <!-- ====== Cards Section End -->
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
                      setTimeout(() => { document.location.href = "/admin/news" }, 2000);
                    })
                }
            })
        });
    }
};
export default List_news;