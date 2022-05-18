import Navigo from "navigo";
import Header from "./components/header";
import Banner from "./components/banner";
import Main from "./page/main";
import Footer from "./components/footer";
import Dashboard from "./page/admin/dashboard";
import Product from "./page/admin/product";
import Add_product from "./page/admin/add_product";
import Edit_product from "./page/admin/edit_product";
import List_news from "./page/admin/list_news";
import Signin from "./page/signin";
import Signup from "./page/signup";
import Baner from "./components/baner";
import Detail from "./page/detail";
import News from "./page/news";
import Add_category from "./page/admin/add_category";
import List_categogy from "./page/admin/list_category";
import Edit_category from "./page/admin/edit_category";
import Add_new from "./page/admin/add_new";
import Edit_new from "./page/admin/edit_new";
import Cart from "./page/cart";
import List_oder from "./page/admin/list_oder";
import Oder from "./page/oder";
import { data } from "autoprefixer";

const router = new Navigo("/", { linksSelector: "a" });

const print = async(content, header, banner, id) => {

    document.querySelector("#header").innerHTML = await header.render();
    document.querySelector("#banner").innerHTML = await banner;
    document.querySelector("#main").innerHTML = await content.render(id);
    document.querySelector("#footer").innerHTML = await Footer.render();

    if (content.afterRender) {
        await content.afterRender(id);
    }
    if (header.afterRender) {
        await header.afterRender(id);
    }


};

const print_admin = async(content_admin, id) => {

    document.querySelector("#app").innerHTML = Dashboard.render();
    document.querySelector("#main").innerHTML = await content_admin.render(id);

    if (content_admin.afterRender) {
        await content_admin.afterRender(id);
    }

};

router.on({
    "/": () => {
        print(Main, Header, Banner.render());
    },
    "product/detail/:id": ({ data }) => {
        print(Detail, Header, Baner.render(), data.id);
    },
    "news": () => {
        print(News, Header, Baner.render());
    },
    "cart": () => {
        print(Cart, Header, Baner.render());
    },
    "signin": () => {
        print(Signin, Header, Baner.render());

    },
    "oder": () => {
        print(Oder, Header, Baner.render());

    },
    "signup": () => {
        print(Signup, Header, Baner.render());
    },
    "admin/dashboard": () => {
        print_admin();
    },
    "admin/product": () => {
        print_admin(Product);
    },
    "admin/news": () => {
        print_admin(List_news);
    },
    "/admin/add/new": () => {
        print_admin(Add_new);
    },
    "admin/new/product": () => {
        print_admin(Add_product);
    },
    "admin/edit/category/:id": ({ data }) => {
        print_admin(Edit_category, data.id);
    },
    "admin/edit/product/:id": ({ data }) => {
        print_admin(Edit_product, data.id);
    },
    "admin/edit/new/:id": ({ data }) => {
        print_admin(Edit_new, data.id);
    },
    "admin/category": () => {
        print_admin(List_categogy);
    },
    "admin/new/add_category": () => {
        print_admin(Add_category);
    },
    "admin/list_oder": () => {
        print_admin(List_oder);
    }

});

router.resolve();