import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { 
    Atualizar, 
    DefinirValorConteudo, 
    DefinirValorNome, 
    DefinirValorPesquisa, 
    Excluir, 
    Inserir, 
    LimparCamposEdicao, 
    LimparMensagem, 
    LimparMensagemSucesso, 
    Listar, 
    Obter, 
    Pesquisar } from '../../store/actions/actions';
import { redirect, useNavigation, Link, Navigate } from "react-router-dom";
import ModalComponente from '../ModalComponente';

class Incluir extends Component {
    state = {
    }
    constructor(props) {
        super(props);  
        this.ManterClick = this.ManterClick.bind(this); 
        this.Redirecionar = this.Redirecionar.bind(this);
        this.VoltarClick = this.VoltarClick.bind(this);  
        this.OcultarMsg = this.OcultarMsg.bind(this);
    }

    componentDidMount(){
        console.log("Carregado");
    }

    
    Redirecionar(){
        this.props.Voltar();
    }

    ManterClick(){
        console.log("Manter");
        this.props.Atualizar();

    }

    VoltarClick(){
        this.Redirecionar();
    }

    OcultarMsg(){
        this.props.LimparMensagem();
    }

    render() {
        const { nome, conteudo, msg, id, sucesso } = this.props;
        
        return ( 
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
                    exibir={msg != "" && msg != null}
                    titulo="Atenção" 
                    msg={msg} 
                    callBack={() => this.OcultarMsg()}>                        
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
    bindActionCreators({ 
        Inserir, 
        DefinirValorNome, 
        DefinirValorConteudo, 
        Obter, 
        Atualizar, 
        LimparCamposEdicao, 
        LimparMensagem }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Incluir)