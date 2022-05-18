import connect from "./connect";

export const getAll = () => {
    const url = "/products";
    return connect.get(url);
}
export const get = (id) => {
    const url = `/products/${id}`;
    return connect.get(url);
}
export const add = (post) => {
    const url = `/products`;
    return connect.post(url, post);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return connect.delete(url);
}
export const edit = (post) => {
    const url = `/products/${post.id}`;
    return connect.put(url, post);
}