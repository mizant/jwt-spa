import axios from "axios";
import router from "./router.js";

const api = axios.create();

// start request
api.interceptors.request.use(  config => {

    if(localStorage.getItem('access_token')) {
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    return config
}, error => {
    console.log(error.response.status);
    // this.$router.push({name: 'user.login'})
})

//end request

api.interceptors.response.use(config => {
    if(localStorage.getItem('access_token')) {
        config.headers = {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        }
    }

    return config

}, error => {
    if (error.response.status === 401) {
        router.push({name: 'user.login'})
    }

})

export default api
