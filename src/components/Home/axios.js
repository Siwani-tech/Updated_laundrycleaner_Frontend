

import axios from 'axios';

const instance=axios.create({
    baseURL:'http://localhost:5001/llaundry-4d372/us-central1/api',
})

export default instance;