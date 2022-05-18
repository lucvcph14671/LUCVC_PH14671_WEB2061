import connect from "./connect";

export const getAll = () => {
    const url = "/oders";
    return connect.get(url);
}
export const get = (id) => {
    const url = `/oders/${id}`;
    return connect.get(url);
}
export const add = (post) => {
    const url = `/oders`;
    return connect.post(url, post);
}
export const remove = (id) => {
    const url = `/oders/${id}`;
    return connect.delete(url);
}
export const edit = (post) => {
    const url = `/oders/${post.id}`;
    return connect.put(url, post);
}
export const getCountCart = () => {
    let countcart = 0;
    const datacart = JSON.parse(localStorage.getItem("cart"));
    countcart = datacart;
    return countcart;
};