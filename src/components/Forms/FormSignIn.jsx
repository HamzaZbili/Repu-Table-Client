import React, { useState } from "react"
import service from "../../services/apiHandler"
import useAuth from "../../context/auth/useAuth"
import { useNavigate } from "react-router-dom"

const FormSignIn = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	})
	const [error, setError] = useState(null)
	const navigate = useNavigate()
	const { storeToken, authenticateUser } = useAuth()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signin(user)
			// console.log(res)
			storeToken(res.token)
			await authenticateUser()
			navigate("/eateries")
		} catch (error) {
			console.log(error)
			setError(error)
		}
	}

	return (
		<>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Signin</h2>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					id="username"
					name="username"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.username}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					onChange={(e) =>
						setUser({ ...user, [e.target.name]: e.target.value })
					}
					value={user.password}
				/>
				<button>Submit</button>
			</form>
		</>
	)
}

export default FormSignIn
