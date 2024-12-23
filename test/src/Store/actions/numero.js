import { DEFINIR_OPERACAO, CALCULAR, DEFINIR_VALOR_UM, DEFINIR_VALOR_DOIS } from "./actionTypes";
import { MAIS, MENOS } from "../../dominio/TipoOperacao";

// Action Creator
export function definirOperacao(operacao) {
    return dispatch => {dispatch({
        type: DEFINIR_OPERACAO,
        payload: operacao}
    )}
}
export function definirValorUm(valor) {
    return dispatch => { dispatch({
        type: DEFINIR_VALOR_UM,
        payload: valor.target.value
    })}
}
export function definirValorDois(valor) {
    return dispatch => { dispatch({
        type: DEFINIR_VALOR_DOIS,
        payload: valor.target.value
    })}
}
export function Calcular() { 
    return (dispatch, getState) => {
        try{
            let valor = 0;
            let estado = getState().numero;
            let a = parseInt(estado.valorUm);
            let b = parseInt(estado.valorDois);
            let operacao = estado.operacao;
            if(operacao == MAIS){
                valor = a + b;
            } else if(operacao == MENOS){
                valor = a - b;
            }
            console.log(valor);
            dispatch({
                type: CALCULAR,
                payload: valor}
            )
        }catch(ex){
            console.log(ex);
            dispatch({
                type: CALCULAR,
                payload: 0}
            )
        }
    }
}