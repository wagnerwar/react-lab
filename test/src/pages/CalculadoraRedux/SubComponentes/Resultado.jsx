import React from "react"
import { connect } from "react-redux";
function Resultado(props) {
    const { resultado } = props;
    return (
        <div>  
            <strong>Resultado: </strong>
            <strong>{resultado}</strong>                
        </div>
    )
}
function mapStateToProps(state) {
    return {
      resultado: state.numero.resultado
    };
  }
export default connect(mapStateToProps)(Resultado)