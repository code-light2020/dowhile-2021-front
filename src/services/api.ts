import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dowhile-bakend.herokuapp.com/'
})