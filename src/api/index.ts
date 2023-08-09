import axios from 'axios';

const serverUrl = 'http://' + window.location.hostname + ':' + process.env.SERVER_PORT;

const imgUrl = `http://${window.location.hostname}:${process.env.SERVER_PORT}/imgs?filename=`;

async function get<T>(endpoint: string, params = ''): Promise<T> {
  return axios.get(serverUrl + endpoint + '/' + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

async function post<T, D>(endpoint: string, data: D): Promise<T> {
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

async function formPost<T, D>(endpoint: string, data: D): Promise<T> {
  return axios.post(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

async function put<T, D>(endpoint: string, data: D): Promise<T> {
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

async function patch<T, D>(endpoint: string, data: D): Promise<T> {
  const bodyData = JSON.stringify(data);

  return axios.patch(serverUrl + endpoint, bodyData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

async function formPatch<T, D>(endpoint: string, data: D): Promise<T> {
  return axios.patch(serverUrl + endpoint, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

async function del<T>(endpoint: string, params = ''): Promise<T> {
  return axios.delete(serverUrl + endpoint + '/' + params, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem('token')}`
    }
  });
}

export { serverUrl, get, post, formPost, put, patch, formPatch, del as delete, imgUrl };
