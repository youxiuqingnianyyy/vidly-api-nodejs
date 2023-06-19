import axios from "axios";
import logger from "./logService";
import {toast} from "react-toastify";



axios.interceptors.response.use(null, error => {
    const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

    if (!expectedError) {
        logger.log(error);
        toast.error("An unexpected error occurred.");
    }

    return Promise.reject(error);
});

function setJwt(jwt) {
  // whenever axios want to send a http request, make sure to include this header in the request.
  axios.defaults.headers.common['x-auth-token'] = jwt;
}

export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt
};
