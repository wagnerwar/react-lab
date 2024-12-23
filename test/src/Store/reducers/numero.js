import { CALCULAR, DEFINIR_OPERACAO, DEFINIR_VALOR_UM, DEFINIR_VALOR_DOIS } 
from "../actions/actionTypes";
const initialState = {
    valorUm: 0,
    valorDois: 0, 
    operacao: "", 
    resultado: 0
}


export default function(state = initialState, action) {
    switch(action.type) {
        case DEFINIR_OPERACAO:
            return {
                ...state,
                operacao: action.payload
            }
        case CALCULAR:
            return {
                ...state, 
                resultado: action.payload
            }
        case DEFINIR_VALOR_UM:
            return {
            ...state,
            valorUm: action.payload
            }
        case DEFINIR_VALOR_DOIS:
            return {
            ...state,
            valorDois: action.payload
            }
        default:
            return {
            ...state
            }
    }
}