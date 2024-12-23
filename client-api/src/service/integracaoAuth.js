import react from "react";
import axios from "axios";
const OAPI_URL = 'http://localhost:3003/oapi'
const chaveApi = "1234";
function Login(){
    let metodo = "/login";
    let chamadaCompleta = OAPI_URL + metodo;
    return axios.post(chamadaCompleta, {"password": chaveApi})
    .then((response) => {
        return response.data;
      }).catch(error => {
        console.log(error);
      });
}
function ValidarToken(valor){
    let metodo = "/validateToken";
    let chamadaCompleta = OAPI_URL + metodo;
    return axios.post(chamadaCompleta, {"token": valor.token})
    .then((response) => {
        return response.data;
      }).catch(error => {
        console.log(error);
      });
}
export const integracaoAuth = {
    Login,
    ValidarToken
}