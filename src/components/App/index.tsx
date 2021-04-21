import React from 'react'
import './App.scss'

interface Props {
    message: string
}

const App = ({ message }: Props): JSX.Element => {
    return (
        <div className="App">
            <h1>{message}</h1>
        </div>
    )
}

export default App
