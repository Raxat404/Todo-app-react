import axios from 'axios'

const baseURL = 'https://todo.paydali.uz'

export const axiosClassic = axios.create({
	baseURL,
})

export const axiosAPI = axios.create({
	baseURL,
	headers: {
		Authorization: 'Bearer ' + localStorage.getItem('todo-token'),
	},
})
