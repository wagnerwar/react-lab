import React from "react"
import { Router, Route, Navigate, Routes } from 'react-router'
import Calculadora from "../pages/Calculadora/Calculadora"
import Inicio from "../pages/Inicio/Inicio"
import { BrowserRouter } from "react-router-dom"
import Menu from "./Menu"
import CalculadoraRedux from "../pages/CalculadoraRedux/CalculadoraRedux"
const Rotas = props => (
    <BrowserRouter>
        <Menu></Menu>
        <Routes>
            <Route path='/calculadora' element={CalculadoraRedux} Component={CalculadoraRedux} />
            <Route path='/inicio' element={Inicio} Component={Inicio} />
            <Route path='/' element={Inicio} Component={Inicio} />
        </Routes>  
    </BrowserRouter> 
)
export default Rotas