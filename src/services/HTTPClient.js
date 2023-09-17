import axios from 'axios';

class Client {
    async getData (url, params = null) {
        const resp = await axios.get(url, params);

        return resp.data;
    }
}

let clientInstance = Object.freeze(new Client());

export { clientInstance as HTTPClient };