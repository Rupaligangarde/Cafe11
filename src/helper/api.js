import {perform} from "./operation";

const api = {
    signUp: {
        post: (body) => perform({
            method: 'post',
            url: `http://localhost:8080/v1/users/register`,
            body,
        })
    }
};

export default api;