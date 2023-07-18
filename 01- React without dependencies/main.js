import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'
import React from 'https://esm.sh/react@18.2.0'

const appDOMElement = document.getElementById('app')
const root = ReactDOM.createRoot(appDOMElement)

const createReactElement = React.createElement // function

const btn1 = createReactElement('button', { 'data-id': 123, class: 'azul' }, 'Button 1')
const btn2 = createReactElement('button', { 'data-id': 456 }, 'Button 2')
const btn3 = createReactElement('button', { 'data-id': 789 }, 'Button 3')

const fragment = createReactElement(React.Fragment, null, [btn1, btn2, btn3])
root.render(fragment)
