import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/index'

const message = 'ReactJS with Typescript!!!'

ReactDOM.render(<App message={message} />, document.getElementById('root'))
