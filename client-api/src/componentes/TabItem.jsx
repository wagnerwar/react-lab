import React from "react";
export default function TabItem(props) {
    return (
        <li className="nav-item">
            <a
            onClick={() => props.selecionarTab()} 
            className={`nav-link ${props.ativo == props.nomeTab ? 'active' : ''}`} 
            href="#">{props.descricaoTab}</a>
        </li>
    );
  }