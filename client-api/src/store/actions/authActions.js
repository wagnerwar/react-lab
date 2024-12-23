import { USER_FETCHED, TOKEN_VALIDATED } from "./actionTypes";
import { integracaoAuth } from "../../service/integracaoAuth";
export function login() {
    return (dispatch, getState) => {
        try{
            let params = getState().authReducer;
            integracaoAuth.Login()
            .then(resp => {
                dispatch([
                    { type: USER_FETCHED, payload: resp.data }
                ])
            })
            .catch(e => {
                console.log(e);
            }) 
        }catch(ex){
            console.log(ex);            
        }
    }
}

export function validateToken() {
    return (dispatch, getState) => {
        try{
            let reducer = getState().authReducer;
            const userKey = 'usuario'
            let dados = localStorage.getItem(userKey);
            console.log(dados);         
            if(typeof dados !== 'undefined' && dados != null && dados != undefined && dados != "undefined"){
                let t = JSON.parse(dados);
                integracaoAuth.ValidarToken(t)
                .then(resp => {
                    dispatch([
                        { type: USER_FETCHED, payload: t },
                        { type: TOKEN_VALIDATED, payload: resp.valid }
                    ])
                })
                .catch(e => {
                    integracaoAuth.Login()
                    .then(resp => {
                        console.log(resp);
                        dispatch([
                            { type: USER_FETCHED, payload: resp },
                            { type: TOKEN_VALIDATED, payload: true }
                        ])
                    }).catch(e => {
                        e.response.data.errors.forEach(
                            error => toastr.error('Erro', error))
                    })
                })                 
            }else{
                integracaoAuth.Login()
                .then(resp => {
                    dispatch([
                        { type: USER_FETCHED, payload: resp },
                        { type: TOKEN_VALIDATED, payload: true }
                    ])
                }).catch(e => {
                    e.response.data.errors.forEach(
                        error => toastr.error('Erro', error))
                })
            } 
        }catch(ex){
            console.log(ex);            
        }
    }
}