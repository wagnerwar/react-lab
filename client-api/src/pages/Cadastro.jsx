import React, { Component } from 'react'
import { connect } from "react-redux"
import HeaderPage from '../componentes/Layout/HeaderPage'
import { bindActionCreators } from "redux";
import { Atualizar, DefinirValorConteudo, DefinirValorNome, DefinirValorPesquisa, Excluir, Inserir, LimparCamposEdicao, Listar, Obter, Pesquisar } from '../store/actions/actions';
import './Cadastro.css'
import Message from '../componentes/Message';
import { redirect, useNavigation, Link, Navigate } from "react-router-dom";
import inicio from './inicio';
import ModalComponente from '../componentes/ModalComponente';

class Cadastro extends Component {
    state = {
        submitted : false,
        exibirMsg: false
      }
    constructor(props) {
        super(props);  
        this.ManterClick = this.ManterClick.bind(this); 
        this.Redirecionar = this.Redirecionar.bind(this);
        this.VoltarClick = this.VoltarClick.bind(this);  
        this.OcultarMsg = this.OcultarMsg.bind(this);
        this.ExibirMsg = this.ExibirMsg.bind(this);     
    }

    componentDidMount(){
        console.log("Carregado");
    }

    
    Redirecionar(){
        this.setState({...this.state, submitted: true});
    }

    ManterClick(){
        console.log("Manter");
        console.log(this.props.id);
        const myPromise = new Promise((resolve, reject) => {
            this.props.Atualizar();
            setTimeout(function(){
                resolve("OK");
            }, 1000);            
        });

        myPromise.then((result) => {
            if(this.props.msg != null && this.props.sucesso == false){
                this.ExibirMsg();
            }
        }).catch((error) => {
            console.error(error);
        });
    }

    VoltarClick(){
        this.Redirecionar();
    }

    OcultarMsg(){
        this.setState({...this.state, exibirMsg: false});
    }

    ExibirMsg(){
        this.setState({...this.state, exibirMsg: true});        
    }

    render() {
        const { nome, conteudo, msg, id, sucesso } = this.props;
        
        return ( 
            this.state.submitted ? 
            <Navigate to="/"></Navigate> : 
            <div className='col'>                    
                <div className='card'>
                    <div className='card-header'>
                        <h2>Inclusão</h2>
                    </div>
                    <div className="card-body">
                        <form>
                        <input type="hidden" id="id" value={id}  />
                            <div className='row'>
                                <div className="col-4">
                                    <label className="form-label">Nome</label>
                                    <input type="text" className="form-control" id="nome" value={nome} onChange={this.props.DefinirValorNome} />
                                </div>
                                <div className="col-4">
                                    <label className="form-label">Conteudo</label>
                                    <input type="text" className="form-control" id="conteudo" value={conteudo} onChange={this.props.DefinirValorConteudo} />
                                </div>
                                <div className='col-4'>
                                    <button type='button' onClick={() => this.ManterClick()} className='btn btn-primary botao botao-formulario'>Salvar</button>
                                    <button 
                                        type='button' 
                                        onClick={() => { this.props.LimparCamposEdicao(); this.VoltarClick() }} 
                                        className='btn btn-primary  botao botao-formulario'>Voltar
                                    </button>                                                               
                                </div>
                            </div>                                
                        </form>
                    </div>
                </div>
                
                <div>
                {
                    <ModalComponente 
                    exibir={this.state.exibirMsg}
                    titulo="Atenção" 
                    msg={msg} 
                    callBack={() => this.OcultarMsg()}>                        
                    </ModalComponente> 
                }
                {
                    <ModalComponente 
                    exibirBotao={true}
                    exibir={this.props.sucesso}
                    titulo="Sucesso!!" 
                    msg={msg} 
                    callBack={() => { this.OcultarMsg(); }} 
                    callBackSucesso={() => { this.props.LimparCamposEdicao(); this.Redirecionar(); }}>                        
                    </ModalComponente> 
                }
                </div>
            </div>
        );     
    }
}
function mapStateToProps(state) {
    console.log(state.reducer);
    return {
      nome: state.reducer.nome,
      conteudo: state.reducer.conteudo,
      msg: state.reducer.msg,
      id: state.reducer.id,
      sucesso: state.reducer.sucesso
    };
}
const mapDispatchToProps = dispatch => 
    bindActionCreators({ Inserir, DefinirValorNome, DefinirValorConteudo, Obter, Atualizar, LimparCamposEdicao }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)