import axios from "axios";

const url = 'https://catbackend-production.up.railway.app'
const api = '/api/cat'

export const CatApiRestService = {
    async getCatApi() {
        const response = await axios.get(`${url}${api}/find/all`);
        console.log(response.data)
        return response.data;
    },
    async createCatApi(cat: any) {
        const response = await axios.post(`${url}${api}/create`, cat);
        console.log(response.data)
        return response.data;
    },
    async updateCatApi(cat: any) {
        const response = await axios.put(`${url}${api}/edit/${cat._id}`, cat);
        console.log(response.data)
        return response.data;
    },
    async deleteCatApi(cat: any) {
        const response = await axios.delete(`${url}${api}/delete/${cat._id}`);
        console.log(response.data)
        return response.data;
    }
}


