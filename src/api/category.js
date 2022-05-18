import connect from "./connect";

export const getAll = () => {
    const url = "/category";
    return connect.get(url);
}
export const get = (id) => {
    const url = `/category/${id}`;
    return connect.get(url);
}
export const add = (post) => {
    const url = `/category`;
    return connect.post(url, post);
}
export const remove = (id) => {
    const url = `/category/${id}`;
    return connect.delete(url);
}
export const edit = (post) => {
    const url = `/category/${post.id}`;
    return connect.put(url, post);
}