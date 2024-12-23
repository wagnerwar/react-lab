import React from "react"
import Header from "../../componentes/Header"
import { Component } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Operacao from "./SubComponentes/Operacao";
import Resultado from "./SubComponentes/Resultado";
import { MAIS, MENOS } from "../../dominio/TipoOperacao";
import { bindActionCreators } from "redux";
import { definirValorUm, definirValorDois, definirOperacao, Calcular } from "../../Store/actions/numero";
import { connect } from "react-redux";

class CalculadoraRedux extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { valorUm, valorDois, operacao, resultado } = this.props;
        return (
            <div>
                <Header name='Calculadora' small='Bora calcular'></Header>
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <input id='valorUM' className='form-control'
                            placeholder='valor Um'
                            onChange={this.props.definirValorUm}
                            value={valorUm}></input>
                    </div>
                    <div className="col-md-4">
                        <input id='valorDois' className='form-control'
                            placeholder='valor Dois'
                            onChange={this.props.definirValorDois}
                            value={valorDois}></input>
                    </div>
                    <div className="col-md-2">
                        <button type="button" 
                        className={operacao == MAIS ? "btn btn-primary cor-preta" : "btn btn-primary"}
                        onClick={e => { this.props.definirOperacao(MAIS) }}>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button type="button" 
                        className={operacao == MENOS ? "btn btn-primary cor-preta" : "btn btn-primary"}  
                        onClick={e => { this.props.definirOperacao(MENOS) }}>
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                <div className="row col-md-12">
                    <div className="col-md-4">
                        <strong>Resultado: </strong>
                        <strong>{resultado}</strong>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-primary" onClick={e => { this.props.Calcular() }}>
                            <i className="fa fa-calculator"></i>
                        </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        valorUm: state.numero.valorUm,
        valorDois: state.numero.valorDois, 
        operacao: state.numero.operacao,
        resultado: state.numero.resultado
    };
}
  const mapDispatchToProps = dispatch => 
    bindActionCreators({ definirValorUm, definirValorDois, definirOperacao, Calcular }, dispatch)
  
export default connect(mapStateToProps, mapDispatchToProps)(CalculadoraRedux)