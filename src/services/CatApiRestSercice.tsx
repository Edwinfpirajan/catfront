import axios from "axios";

const url = 'http://localhost:8080'
const api = '/api/cat'

export const CatApiRestService = {
    async getCatApi() {
        const response = await axios.get(`${url}${api}/find/all`);
        console.log(response.data)
        return response.data;
    }
}


