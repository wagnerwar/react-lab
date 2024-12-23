import { act } from "react";
import { 
    DEFINIR_VALOR_PESQUISA,
    PESQUISAR, 
    LISTAR, 
    EXIBIR_MSG, 
    EXCLUIR, 
    INSERIR, 
    DEFINIR_DADOS_NOME, 
    DEFINIR_DADOS_CONTEUDO, 
    OBTER, 
    ALTERAR, 
    LIMPAR_CAMPOS_EDICAO, 
    LIMPAR_VALOR_PESQUISA,
    DEFINIR_SUCESSO} 
from "../actions/actionTypes";
const initialState = {
    pesquisa: "",
    lista: [],
    msg: "",
    nome: "",
    conteudo: "",
    id: 0,
    sucesso: false
}


export default function(state = initialState, action) {
    switch(action.type) {
        case PESQUISAR:
            return {
                ...state,
                lista: action.payload
            }
        case LISTAR:
            return {
                ...state,
                lista: action.payload
            }
        case DEFINIR_VALOR_PESQUISA:
            return {
                ...state,
                pesquisa: action.payload
            }
        case EXIBIR_MSG:
            return {
                ...state,
                msg: action.payload
            }
        case INSERIR:
                return {
                    ...state,
                    dados: action.payload
            }
        case DEFINIR_DADOS_CONTEUDO:
                return {
                    ...state,
                    conteudo: action.payload 
            }
        case DEFINIR_DADOS_NOME:
            return {
                ...state,
                nome: action.payload
                }
        case OBTER:
            let dados = action.payload;
            return {
                ...state,
                nome: dados.name,
                conteudo: dados.conteudo,
                id: dados.ID
            }
        case LIMPAR_CAMPOS_EDICAO:
            return {
                ...state,
                nome: "",
                conteudo: "",
                id: 0, 
                sucesso: false
            }
        case LIMPAR_VALOR_PESQUISA:
            return {
                ...state,
                pesquisa: ""
            }
        case DEFINIR_SUCESSO:
            return {
                ...state,
                sucesso: action.payload
            }
        default:
            return {
            ...state
        }
    }
}