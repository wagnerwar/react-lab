import React, { Component, Children } from 'react'
import HeaderPage from './HeaderPage';
import './Main.css'
import '../../Styles/style.css'
import { redirect, useNavigation, Link, Navigate } from "react-router-dom";
import { Outlet } from 'react-router-dom';
class Main extends Component {
    state = {
    }    
    componentDidMount(){
    }

    render() {
        return (  
            <div className='row'>
                <HeaderPage title="Inicio"></HeaderPage>
                <div className='row'>
                    <Outlet></Outlet>
                </div>              
            </div> 
        )
    }
}
export default Main