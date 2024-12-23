import React, { Component } from 'react'
import { connect } from "react-redux"
import HeaderPage from '../componentes/Layout/HeaderPage'
import { bindActionCreators } from "redux";
import ModalComponente from '../componentes/ModalComponente';
import { 
    DefinirRedirecionamentoInicio, 
    DefinirValorPesquisa, 
    Excluir, 
    Listar, 
    Obter, 
    Pesquisar, 
    LimparValorPesquisa } from '../store/actions/actions';
import './inicio.css'
import Message from '../componentes/Message';
import { redirect, useNavigation, Link, Navigate } from "react-router-dom";
class Inicio extends Component {
    state = {
        irProCadastro : false,
    }    
    constructor(props) {
        super(props);
        this.EditarClick = this.EditarClick.bind(this);
        this.Redirecionar = this.Redirecionar.bind(this);
        this.LimparFiltroClick = this.LimparFiltroClick.bind(this);
    }

    componentDidMount(){
        this.props.Listar();
    }

    EditarClick(valor){
        console.log(valor);
        try{
            this.props.Obter(valor);
            this.Redirecionar();
        }catch(er){
            console.log(er);
        } 
    }

    LimparFiltroClick(){
        console.log("Limpar");
        this.props.LimparValorPesquisa();
        this.props.Listar();
    }

    Redirecionar(){
        this.setState({...this.state, irProCadastro: true});
    }

    render() {
        const { pesquisa, lista, msg } = this.props;
    return ( 
        this.state.irProCadastro == true
        ? <Navigate to="/cadastro"></Navigate> 
        :
        <div className='grid'>
            <div className="card">
                <div className='card-header'>
                    <h2>Pesquisa</h2>
                </div>
                <div className="card-body">
                    <div className='row'>
                        <div className=' col'>
                            <label>Nome: </label>
                            
                            <input 
                            className='form-control' 
                            value={pesquisa} 
                            onChange={this.props.DefinirValorPesquisa}></input>
                        </div>
                        <div className=' col'>
                            <button type='button' 
                            onClick={this.props.Pesquisar} 
                            className='btn btn-primary  botao'>Pesquisar</button>
                            
                            <Link to="/cadastro">
                                <button type='button' 
                                className='btn btn-primary  botao'>
                                    Incluir
                                </button>
                            </Link>
                            <button onClick={() => this.LimparFiltroClick()} 
                            className='btn btn-primary botao-acao botao'>Limpar filtro</button>
                        </div>
                    </div>  
                    <div className='row'>
                        <div className='col'>
                            <span className='alerta'>{msg}</span>
                        </div>
                    </div>                 
                </div>
            </div>
            <div className="card">
                <div className='card-header'>
                    <h2>Listagem</h2>
                </div>
                <div className="card-body">
                    {
                        lista != null && lista.length > 0 ? 
                        (
                            <table className="table">
                                <thead className='thead-light'>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        lista.map(item => (
                                            <tr key={item.ID}>
                                            <th scope="row">{item.ID}</th>
                                            <td>{item.name}</td>
                                            <td>
                                                <button onClick={() => this.EditarClick(item.ID)} className='btn btn-info botao-acao'><ion-icon name="create-outline"></ion-icon></button>
                                                <button onClick={() => this.props.Excluir(item.ID)} className='btn btn-danger botao-acao'><ion-icon name="trash-outline"></ion-icon></button>
                                            </td>
                                            </tr>        
                                        ))
                                    } 
                                </tbody>
                            </table>
                        ) : 
                        (
                            <p><span>Nenhum registro encontrado</span></p>
                        )
                    }
                </div>
            </div>
        </div>                
    )
    }
}
function mapStateToProps(state) {
    console.log(state.reducer);
    return {
      pesquisa: state.reducer.pesquisa,
      lista: state.reducer.lista,
      msg: state.reducer.msg
    };
}
const mapDispatchToProps = dispatch => 
    bindActionCreators({ Pesquisar, DefinirValorPesquisa, Listar, Excluir, Obter, LimparValorPesquisa }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Inicio)