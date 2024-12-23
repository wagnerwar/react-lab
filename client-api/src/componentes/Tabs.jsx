import React, { Component } from 'react'
import { redirect, useNavigation, Link, Navigate } from "react-router-dom";
import { TabEnumHello, TabEnumIncluir, TabEnumLista } from '../Dominio/Enum';
import Hello from './Tab/Hello';
import TabItem from './TabItem';
import Lista from './Tab/Lista';
import incluir from './Tab/incluir';
import Incluir from './Tab/incluir';

class Tabs extends Component {
    state = {
        tabActive: ""
    }    

    constructor(props) {
        super(props);
        this.state = { tabActive: TabEnumHello };
    }


    componentDidMount(){
    }

    setTab(valor){
        this.setState({tabActive: valor})
    }

    Voltar(){

    }

    render() {
        return (  
            <>
                <ul className="nav nav-tabs">
                    <TabItem 
                    selecionarTab={() => this.setTab(TabEnumHello)}
                    ativo={this.state.tabActive}
                    nomeTab={TabEnumHello} descricaoTab={"Home"}></TabItem>
                    <TabItem 
                    selecionarTab={() => this.setTab(TabEnumLista)}
                    ativo={this.state.tabActive}
                    nomeTab={TabEnumLista} descricaoTab={"lista"}>

                    </TabItem>
                    <TabItem 
                    selecionarTab={() => this.setTab(TabEnumIncluir)}
                    ativo={this.state.tabActive}
                    nomeTab={TabEnumIncluir} descricaoTab={"Incluir"}>
                        
                    </TabItem>
                </ul>
                <div className='container'>
                    {
                         this.state.tabActive == TabEnumHello ? <Hello></Hello> : ""   
                    }
                    {
                         this.state.tabActive == TabEnumIncluir ? <Incluir 
                         Voltar={() => this.setTab(TabEnumHello)}></Incluir> : ""   
                    }
                    {
                         this.state.tabActive == TabEnumLista ? <Lista 
                         incluir={() => this.setTab(TabEnumIncluir)} 
                         Voltar={() => this.setTab(TabEnumHello)}></Lista> : ""   
                    }
                </div>
            </>     
        )
    }
}
export default Tabs