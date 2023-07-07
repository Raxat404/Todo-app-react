import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainProvider from './Providers/MainProvider.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<MainProvider>
		<App />
	</MainProvider>
)
