import axios from 'axios';
const url = 'http://localhost:3000';
export async function get(path,param) {
    const data = await axios.get(`${url}${path}${param}`);
    if (data.status === 200) {
        return data.data;
    } else {
        return {
            code: -1
        }
    }
}