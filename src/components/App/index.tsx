import React from 'react'
import './App.scss'

import svg from '../../assets/react-logo.svg'
interface Props {
    message: string
}

const App = ({ message }: Props): JSX.Element => {
    return (
        <div className="App">
            <h1>{message}</h1>
            <img src={svg} alt="React Logo"/>
        </div>
    )
}

export default App
