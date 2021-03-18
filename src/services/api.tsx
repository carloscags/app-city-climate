import axios from 'axios'

//https://api.hgbrasil.com/weather?key=9b709a72&lat=-23.682&lon=-46.875

export const key = '9b709a72';

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})


export default api;