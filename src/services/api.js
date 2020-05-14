import axios from "axios";

const api = axios.create(
    {
       baseURL:"https://5ebc630aec34e90016191800.mockapi.io/api/v1/"
      //   baseURL:"http://localhost/blogApi/public/"
    }
)


export default api;