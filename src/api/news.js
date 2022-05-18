import connect from "./connect";

export const getAll = () => {
    const url = "/news";
    return connect.get(url);
}
export const get = (id) => {
    const url = `/news/${id}`;
    return connect.get(url);
}
export const add = (post) => {
    const url = `/news`;
    return connect.post(url, post);
}
export const remove = (id) => {
    const url = `/news/${id}`;
    return connect.delete(url);
}
export const edit = (post) => {
    const url = `/news/${post.id}`;
    return connect.put(url, post);
}