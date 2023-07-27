import React from 'react'
import ReactDOM from 'react-dom'
import './styles/content.css'
import App from './components/ContentApp'

const root = document.createElement('div')
root.id = 'qiita-search'
document.body.append(root)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)
