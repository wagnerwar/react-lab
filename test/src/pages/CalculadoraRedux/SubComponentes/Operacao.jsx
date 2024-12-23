import React from "react"
import { connect } from "react-redux"
function Operacao(props) {
    const { operacao } = props;
    return (
        <div> 
            <strong>Operação: </strong>
            <strong>{operacao}</strong>              
        </div>
    )
}
function mapStateToProps(state) {
    return {
      operacao: state.numero.operacao
    };
  }
export default connect(mapStateToProps)(Operacao)