import Axios from 'axios';
import Rx from 'rxjs/Rx';

const axiosInstance = Axios.create({
  withCredential: true,
  baseURL: 'http://game.bons.me/api/',
  timeout:  10 * 1000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'multipart/form-data',
  },
  credentials: 'same-origin',
  mode: 'no-cors',
  crossdomain: true,
  validateStatus: function (status) {
    return (status >= 200 && status < 309)
      || status === 401
      || status === 403
      || status === 404
      || status === 416
      || status === 500;
  },
});

export function addHeader(field, value) {
  axiosInstance.defaults.headers.common[field] = value;
}

export function getHeader(field) {
  return axiosInstance.defaults.headers.common[field];
}

export function get(url, params) {
  return Rx.Observable.fromPromise(axiosInstance.get(url, { params: params }));
}

export function post(url, body) {
  return Rx.Observable.fromPromise(axiosInstance.post(url, body));
}

export function put(url, body) {
  return Rx.Observable.fromPromise(axiosInstance.put(url, body));
}

export function deletex(url, body) {
  return Rx.Observable.fromPromise(axiosInstance.delete(url, { params: body }));
}

export function setValidator(validator) {
  axiosInstance.interceptors.response.use(validator);
}