import axios from "axios";

const url = 'https://catbackend-production.up.railway.app'


export const CatApiService = {
    async getCatApi() {
        const response = await axios.get(`${url}/api/get/all/random`);
        return response.data;
    }
}

