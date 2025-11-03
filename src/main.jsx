// Entry point: renders the root component.
// React takes the JSX returned by <App /> and mounts it into the DOM node with id="root".
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles.css'

const root = createRoot(document.getElementById('root'))
// The JSX <App /> is evaluated to elements and rendered into #root
root.render(<App />)
