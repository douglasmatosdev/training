import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/index'

const message = 'ReactJS setup with webpack. Without create-react-app.'

ReactDOM.render(<App message={message} />, document.getElementById('root'))
