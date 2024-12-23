import React from "react"
import { Link } from "react-router-dom"

const Menu = props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <Link to="/" className="navbar-brand" >
                    Aplicação
                </Link>
            </div>
            <div id='navbar' className=''>
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/calculadora" className="navbar-brand" >
                            <i className='fa fa-calculator'></i> 
                            Calculadora
                        </Link>                       
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)
export default Menu