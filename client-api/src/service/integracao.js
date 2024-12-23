import react from "react";
import axios from "axios";
const BASE_URL = 'http://localhost:3003/api'
const OAPI_URL = 'http://localhost:3003/oapi'

function Listar(){
    let metodo = "/listar";
    let chamadaCompleta = BASE_URL + metodo;
    return axios.get(chamadaCompleta)
    .then((response) => {
        return response.data;
      }).catch(error => {
        console.log(error);
      });
}
function Filtrar(valor){
  let metodo = "/filtrar";
  let params = `/${valor}/`;
  let chamadaCompleta = BASE_URL + metodo + params;
  return axios.get(chamadaCompleta)
  .then((response) => {
      return response.data;
    }).catch(error => {
      console.log(error);
    });
}
function Excluir(valor){
  let metodo = "/excluir";
  let params = `/${valor}`;
  let chamadaCompleta = BASE_URL + metodo + params;
  return axios.delete(chamadaCompleta)
  .then((response) => {
      return response.data;
    }).catch(error => {
      console.log(error);
    });
}
function Inserir(valor){
  let metodo = "/inserir";
  let chamadaCompleta = BASE_URL + metodo;
  return axios.post(chamadaCompleta, valor)
  .then((response) => {
      return response.data;
    }).catch(error => {
      console.log(error);
    });
}
function Obter(valor){
  let metodo = `/obter/${valor}`;
  let chamadaCompleta = BASE_URL + metodo;
  return axios.get(chamadaCompleta, valor)
  .then((response) => {
      return response.data;
    }).catch(error => {
      console.log(error);
    });
}

function Atualizar(valor){
  let metodo = "/atualizar";
  let chamadaCompleta = BASE_URL + metodo;
  return axios.post(chamadaCompleta, valor)
  .then((response) => {
      return response.data;
    }).catch(error => {
      console.log(error);
    });
}

export const integracao = {
    Listar, 
    Filtrar, 
    Excluir, 
    Inserir, 
    Obter,
    Atualizar
}