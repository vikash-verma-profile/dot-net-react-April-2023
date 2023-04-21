import axios from "axios";
const API_URL="https://localhost:7293/api/Login/";

const register=(username,password)=>{
    return axios.post(API_URL+"register",{
        username,
        password
    });
}
const login=(username,password)=>{
    return axios.post(API_URL+"login",{
        username,
        password
    }).then((response)=>{
        if(response.data.token){
            localStorage.setItem("token",response.data.token)
        }

        return response.data;
    });
}

const getToken=()=>{
    return localStorage.getItem("token");
}
const logout=()=>{
     localStorage.removeItem("token");
}
const Islogged=()=>{
    return ((localStorage.getItem('token')!=='')?true:false);
}
const AuthService={
    register,
    login,
    getToken,
    Islogged,
    logout
}
export default AuthService;