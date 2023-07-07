import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import { routes } from './utils/routes'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				{routes.protected.map(item => (
					<Route path={item.path} element={<item.element />} />
				))}
			</Route>

			{routes.open.map(item => (
				<Route key={item.path} path={item.path} element={<item.element />} />
			))}
		</Routes>
	)
}

export default App
