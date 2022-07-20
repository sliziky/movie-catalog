import axios from "axios";

export const apiClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  withCredentials: false,
  headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json'
  }
});