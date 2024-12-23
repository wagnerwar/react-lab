import { 
    DEFINIR_VALOR_PESQUISA, 
    EXIBIR_MSG, 
    LISTAR, 
    PESQUISAR, 
    DEFINIR_DADOS_CONTEUDO, 
    DEFINIR_DADOS_NOME, 
    LIMPAR_MSG, 
    ALTERAR, 
    OBTER, 
    LIMPAR_CAMPOS_EDICAO, 
    LIMPAR_VALOR_PESQUISA, 
    DEFINIR_SUCESSO} from "./actionTypes";
import { integracao } from "../../service/integracao";
import { toastr } from 'react-redux-toastr'

export function Pesquisar() { 
    return (dispatch, getState) => {
        try{
            console.log(getState());
            let params = getState().reducer;
            let valor = params.pesquisa;
            if(valor == null || valor == ""){
                toastr.error('Atenção', 'Digite um valor para pesquisa');
                dispatch({
                    type: EXIBIR_MSG,
                    payload: "Digite um valor para pesquisa"})
            }else{
                dispatch({
                    type: EXIBIR_MSG,
                    payload: ""})
                integracao.Filtrar(valor).then((r) => {
                    dispatch({
                        type: PESQUISAR,
                        payload: r})
                }).catch(er => {
                    console.log(er);
                });
            } 
        }catch(ex){
            console.log(ex);            
        }
    }
}
export function DefinirValorPesquisa(valor) { 
    return dispatch => {dispatch({
        type: DEFINIR_VALOR_PESQUISA,
        payload: valor.target.value}
    )}
}
export function Listar() { 
    return (dispatch, getState) => {
        try{
            integracao.Listar().then((r) => {
                dispatch([
                    {
                        type: LISTAR,
                        payload: r
                    }, 
                    {
                        type: EXIBIR_MSG,
                        payload: ""
                    }])
            }).catch(er => {
                console.log(er);
            }); 
        }catch(ex){
            console.log(ex);            
        }
    }
}
export function Excluir(id) { 
    return (dispatch, getState) => {
        try{
            console.log(getState());
            let params = getState().reducer;
            let valor = id;
                dispatch({
                    type: EXIBIR_MSG,
                    payload: "Exclusão realizada com sucesso"})
                    integracao.Excluir(valor).then((r) => {
                        integracao.Listar().then((res) => {
                            dispatch({
                                type: LISTAR,
                                payload: res})
                            }).catch(er => {
                                console.log(er);
                            });
                    }).catch(er => {
                        console.log(er);
                    });
            
        }catch(ex){
            console.log(ex);
            dispatch({
                type: EXIBIR_MSG,
                payload: "Erro ao excluir"});       
        }
    }
}
export function Inserir() { 
    return (dispatch, getState) => {
        try{
            console.log(getState());
            let params = getState().reducer;
            let dados = {name: params.nome, conteudo: params.conteudo};
            let erros = [];
            if(dados.name == "" || dados.name == null ){
                erros.push("Nome deve ser preenchido")
            }
            if(dados.conteudo == "" || dados.conteudo == null){
                erros.push("Conteudo deve ser preenchido")
            }
            if(erros.length == 0){
                integracao.Inserir(dados).then((r) => {
                    dispatch([{
                        type: EXIBIR_MSG,
                        payload: "Inclusão realizada com sucesso"},
                        {
                            type: DEFINIR_DADOS_NOME,
                            payload: ""
                        },
                        {
                            type: DEFINIR_DADOS_CONTEUDO,
                            payload: ""
                        },
                        {
                            type: DEFINIR_SUCESSO,
                            payload: true
                        }])
                }).catch(er => {
                    console.log(er);
                    dispatch({
                        type: EXIBIR_MSG,
                        payload: "Erro ao incluir"});  
                });
            }else{
                let msgErro = erros.join(" e ");
                dispatch({
                    type: EXIBIR_MSG,
                    payload: `Atenção!! ${msgErro}`});    
            }                     
        }catch(ex){
            console.log(ex);
            dispatch({
                type: EXIBIR_MSG,
                payload: "Erro ao incluir"});       
        }
    }
}
export function DefinirValorNome(valor) { 
    return dispatch => {dispatch({
        type: DEFINIR_DADOS_NOME,
        payload: valor.target.value}
    )}
}
export function DefinirValorConteudo(valor) { 
    return dispatch => {dispatch({
        type: DEFINIR_DADOS_CONTEUDO,
        payload: valor.target.value}
    )}
}
export function Atualizar() { 
    return (dispatch, getState) => {
        try{
            let params = getState().reducer;
            let dados = {name: params.nome, conteudo: params.conteudo, id: params.id};
            console.log(dados);
            let erros = [];
            if(dados.name == "" || dados.name == null ){
                erros.push("Nome deve ser preenchido")
            }
            if(dados.conteudo == "" || dados.conteudo == null){
                erros.push("Conteudo deve ser preenchido")
            }
            if(erros.length == 0){
                /*integracao.Atualizar(dados).then((r) => {
                    dispatch([{
                        type: EXIBIR_MSG,
                        payload: "Edição realizada com sucesso"},
                        {
                            type: DEFINIR_DADOS_NOME,
                            payload: ""
                        },
                        {
                            type: DEFINIR_DADOS_CONTEUDO,
                            payload: ""
                        }])
                }).catch(er => {
                    console.log(er);
                    dispatch({
                        type: EXIBIR_MSG,
                        payload: "Erro ao incluir"});  
                });*/
                dispatch([
                    {
                        type: EXIBIR_MSG,
                        payload: "Edição realizada com sucesso"
                    },
                    {
                        type: DEFINIR_SUCESSO,
                        payload: true
                    }])
            }else{
                let msgErro = erros.join(" e ");
                dispatch({
                    type: EXIBIR_MSG,
                    payload: `Atenção!! ${msgErro}`});    
            }                     
        }catch(ex){
            console.log(ex);
            dispatch({
                type: EXIBIR_MSG,
                payload: "Erro ao incluir"});       
        }
    }
}
export function Obter(valor) { 
    return (dispatch, getState) => {
        try{
            console.log(getState());
            let params = getState().reducer;
            integracao.Obter(valor).then((r) => {
                dispatch([
                    {
                        type: OBTER,
                        payload: r
                    }])
            }).catch(er => {
                console.log(er);
                dispatch({
                    type: EXIBIR_MSG,
                    payload: "Erro ao obter dados"});  
            });        
        }catch(ex){
            console.log(ex);
            dispatch({
                type: EXIBIR_MSG,
                payload: "Erro ao obter dados"});       
        }
    }
}
export function LimparCamposEdicao() { 
    return dispatch => {
        dispatch(
            {
                type: LIMPAR_CAMPOS_EDICAO
            }
        )
    }
}
export function LimparValorPesquisa() { 
    return dispatch => {dispatch({
        type: LIMPAR_VALOR_PESQUISA,
        payload: ""}
    )}
}

export function LimparMensagem() { 
    return dispatch => {
        dispatch(
            {
                type: EXIBIR_MSG, payload: ""
            }
        )
    }
}