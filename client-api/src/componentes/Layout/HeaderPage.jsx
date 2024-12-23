import React from 'react'
import './HeaderPage.css'

export default props => (
    <div className='col-md-12'>
        <h1>{props.title ? props.title : 'Oi'}</h1>
    </div>
)