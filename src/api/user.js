import connect from "./connect";

export const signup = (user) => {
    const url = "/signup";
    return connect.post(url, user);
}
export const signin = (user) => {
    const url = "/signin";
    return connect.post(url, user);
}