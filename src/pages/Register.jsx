import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { axiosClassic } from '../config/axios.interceptors'

const Register = () => {
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const navigate = useNavigate()
	const { token } = useSelector(store => store.auth)

	useEffect(() => {
		if (token) {
			navigate('/', { replace: true })
		}
	}, [])

	const onSubmit = e => {
		e.preventDefault()

		axiosClassic
			.post('/api/register', {
				name,
				phone,
				password,
			})
			.then(res => {
				Swal.fire({
					title: 'Registered successful!',
					icon: 'success',
				})
				navigate('/login', { replace: true })
			})
			.catch(err => {
				Swal.fire({
					title: 'Something went wrong!',
					icon: 'error',
				})
			})
	}

	return (
		<div className='auth-wrapper'>
			<div className='auth-container'>
				<h1 className='auth-title'>Hello, welcome to register page!</h1>

				<form onSubmit={onSubmit} className='auth-form'>
					<input
						onChange={e => setName(e.target.value)}
						type='text'
						placeholder='Enter your name...'
					/>
					<input
						onChange={e => setPhone(e.target.value)}
						type='text'
						placeholder='Enter your phone...'
					/>
					<input
						onChange={e => setPassword(e.target.value)}
						type='password'
						placeholder='Password'
					/>
					<button type='submit' className='btn btn-primary'>
						Register
					</button>
				</form>

				<Link className='redirect-link' to={'/login'}>
					Do you have an account? (Login)
				</Link>
			</div>
		</div>
	)
}

export default Register
