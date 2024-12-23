import React, { Component } from 'react'
import HeaderPage from '../componentes/Layout/HeaderPage'
import './Home.css'
import { redirect, useNavigation, Link, Navigate } from "react-router-dom";
import Tabs from '../componentes/Tabs';

class Home extends Component {
    state = {
    }    

    componentDidMount(){
    }

    render() {
        return (  
            <>
                <Tabs></Tabs>
            </>     
        )
    }
}
export default Home