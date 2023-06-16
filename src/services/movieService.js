import http from "./httpService";
import { apiUrl } from "../config.json";
import {func} from "prop-types";

const apiEndpoint = apiUrl + '/movies';

function movieUrl(id) {
    return `${apiEndpoint}/${id}`;
}
export function getMovies() {
    return http.get(apiEndpoint);
}

export function deleteMovie(movieId) {
    return http.delete(movieUrl(movieId));
}

export function getMovie(movieId) {
    return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if (movie._id) {
        const body = {...movie};
        delete body._id;
        return http.put(movieUrl(movie._id), body);
        // this movie has an id property, but restful api does not the id in the body of the request.
        // one id in the url, one in the body of request. which one is correct?
        // so we should remove the id from this object, but we don't want to modify this object directly.
    }
    return http.post(apiEndpoint, movie);
}
