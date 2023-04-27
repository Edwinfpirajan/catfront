import axios from "axios";

const url = 'http://localhost:8080'


export const CatApiService = {
    async getCatApi() {
        const response = await axios.get(`${url}/api/get/all/random`);
        return response.data;
    }
}

