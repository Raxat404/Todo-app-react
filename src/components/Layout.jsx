import Item from 'antd/es/list/Item'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
	const { token } = useSelector(state => state.auth)

	if (!token) return <Navigate to='/login' replace={true} />

	const menuItems = [
		{
			label: "Todos",
			path: '/'
		},
		{
			label: "Create todos",
			path: '/create-todos',
		},
		{
			label: 'Categories',
			path: '/categories',
		},
		{
			label: 'Create categoreis',
			path: '/create-categories'
		}
	]
	const {pathname} = useLocation()
	return (
		<div className='layout'>
			<div className='sidebar'>
				<ul>
					{
						menuItems.map((item) => (
							<li key={item.path}>
								<Link className={item.path === pathname ? 'active' : ''} 
								to={item.path}>
									{item.label}
								</Link>
							</li>
						))
					}
				</ul>
			</div>
			<div className='main'>
				<Outlet />
			</div>
		</div>
	)
}

export default Layout
