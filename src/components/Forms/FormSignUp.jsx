import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import service from "../../services/apiHandler"

const FormSignUp = () => {
	const [formData, setFormData] = useState(
		{
		username: "",
		email: "",
		password: ""
	})
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.signup(formData)
			navigate("/signin")
		} catch (error) {
			setError(e.message)
		}
	}
	return (
		<>
			{error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
				<h2>Signup</h2>
				<label htmlFor="username">usename</label>
				<input
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					value={formData.name}
					type="text"
					id="username"
					name="username"
				/>
				<label htmlFor="email">email</label>
				<input
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					value={formData.email}
					type="email"
					id="email"
					name="email"
				/>
				<label htmlFor="password">password</label>
				<input
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					value={formData.password}
					type="password"
					id="password"
					name="password"
				/>
				<button>Submit</button>
			</form>
		</>
	)
}

export default FormSignUp
