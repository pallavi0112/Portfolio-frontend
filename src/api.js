import axios from 'axios'
import { BASEURL } from './config'
export const api = axios.create({
    baseURL: BASEURL
})