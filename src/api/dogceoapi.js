import axios from 'axios';

// Customized copy of Axios client
export default axios.create({
  baseURL: 'https://dog.ceo/api',
});
