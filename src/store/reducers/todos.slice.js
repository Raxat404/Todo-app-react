import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
	name: 'todos',
	initialState: {
		data: [],
		loading: false,
	},
	reducers: {
		fetchingTodos: state => {
			state.loading = true
		},
		fetchedTodos: (state, action) => {
			state.data = action.payload
			state.loading = false
		},
		fetchingErrorTodos: state => {
			state.loading = false
		},
	},
})

export const { fetchedTodos, fetchingErrorTodos, fetchingTodos } =
	todosSlice.actions

export default todosSlice.reducer
