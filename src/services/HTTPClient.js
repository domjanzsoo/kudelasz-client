import axios from 'axios';

class Client {
    async getData (url, params = null) {
        const resp = await axios.get('/api' + url, params);

        console.log(resp);
        return resp.data;
    }
}

let clientInstance = Object.freeze(new Client());

export { clientInstance as HTTPClient };