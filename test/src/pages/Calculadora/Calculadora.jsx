import React from "react"
import Header from "../../componentes/Header"
import { Component } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Calculadora extends Component {
    constructor(props) {
        super(props)
        this.state = { valorUm: '', valorDois: '', operacao: '', resultado: '' }
        this.handleOperacaoSomaClick = this.handleOperacaoSomaClick.bind(this)
        this.handleOperacaoSubtracaoClick = this.handleOperacaoSubtracaoClick.bind(this)
        this.handleChangeValorUm = this.handleChangeValorUm.bind(this)
        this.handleChangeValorDois = this.handleChangeValorDois.bind(this)
        this.handleCalcularClick = this.handleCalcularClick.bind(this)

        let tiposOperacao = Object.freeze({
            Mais: '+',
            Menos: '-'
        })

        this.tiposOperacao = tiposOperacao;
    }

    handleOperacaoSomaClick(e) {
        this.setState({...this.state, operacao: this.tiposOperacao.Mais })
    }

    handleOperacaoSubtracaoClick(e) {
        this.setState({...this.state, operacao: this.tiposOperacao.Menos })
    }

    handleCalcularClick(e) {
        console.log(this.state);
        if(this.state.valorUm == '' 
            || this.state.valorUm == null){
            console.log("Exibir mensagem");
            toast.error("Primeiro valor deve ser preenchido");
            return;
        }

        if(this.state.valorDois == '' 
            || this.state.valorDois == null){
            toast.error("Segundo valor deve ser preenchido");
            return;
        }

        if(this.state.operacao == '' 
            || this.state.operacao == null){
            toast.error("Operação deve ser preenchido");
            return;
        } 
        let a = parseInt(this.state.valorUm);
        let b = parseInt(this.state.valorDois);
        let operacao = this.state.operacao;
        let resultado = 0;
        if(operacao == this.tiposOperacao.Mais){
            resultado = a + b;
        } else if(operacao == this.tiposOperacao.Menos){
            resultado = a - b;
        }
        this.setState({...this.state, resultado: resultado })
    }

    handleChangeValorUm(e) {
        this.setState({...this.state, valorUm: e.target.value })
    }

    handleChangeValorDois(e) {
        this.setState({...this.state, valorDois: e.target.value })
    }

    render() {
        return (
            <div>
                <Header name='Calculadora' small='Bora calcular'></Header>
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <input id='valorUM' className='form-control'
                            placeholder='valor Um'
                            onChange={this.handleChangeValorUm}
                            value={this.state.valorUm}></input>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className={this.state.operacao == this.tiposOperacao.Mais ? "btn btn-primary cor-preta" : "btn btn-primary"} onClick={this.handleOperacaoSomaClick}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button type="button" className={this.state.operacao == this.tiposOperacao.Menos ? "btn btn-primary cor-preta" : "btn btn-primary"}  onClick={this.handleOperacaoSubtracaoClick}>
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                    <div className="col-md-4">
                        <input id='valorDois' className='form-control'
                            placeholder='valor Dois'
                            onChange={this.handleChangeValorDois}
                            value={this.state.valorDois}></input>
                    </div>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <strong>Resultado: </strong>
                        <strong>{this.state.resultado}</strong>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary" onClick={this.handleCalcularClick}>
                            <i className="fa fa-calculator"></i>
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    }
}