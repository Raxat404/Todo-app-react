import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.slice'
import todosReducer from './reducers/todos.slice'
import CategoriesReducer from './reducers/categories.slice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		todos: todosReducer,
		categories: CategoriesReducer,
	},
	devTools: true,
})
