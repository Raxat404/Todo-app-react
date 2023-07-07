import Categories from '../pages/Categories'
import Createcategory from '../pages/Createcategory'
import CreateTask from '../pages/CreateTask'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const routes = {
	protected: [
		{
			path: '/',
			element: Home,
		},
		{
			path: '/categories',
			element: Categories,
		},
		{
			path: '/create-todos',
			element: CreateTask,
		},
		{
			path: '/create-categories',
			element: Createcategory,
		}
	],
	open: [
		{
			path: '/register',
			element: Register,
		},
		{
			path: '/login',
			element: Login,
		},
	],
}
