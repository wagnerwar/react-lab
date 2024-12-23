import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import App from './App'
import { login, validateToken } from '../store/actions/authActions'

class AuthOrApp extends Component {
    constructor(props) {
        super(props)
        this.state = { carregando: true }
    }
    componentDidMount() {
        this.props.validateToken();
        this.changeCarregandoMode();
    }
    
    changeCarregandoMode() {
        this.setState({ carregando: !this.state.carregando })
    }

    render() {
        const { carregando } = this.state
        const { user, validToken } = this.props.auth
        if (validToken && user && carregando == false) {
            console.log(this.props.auth);
            axios.defaults.headers.common['authorization'] = user.token
            return <div> <App>{this.props.children}</App> </div>            
        } else{ 
            return <div>Carregando....</div>
        }
    }
}

const mapStateToProps = state => ({ auth: state.authReducer })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken, login }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(AuthOrApp)