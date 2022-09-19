import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../../context/auth/useAuth'
import service from '../../services/apiHandler'
import '../../styles/becomeReputableForm.css'

const BecomeReputable = () => {
  const {id} = useParams()
  const { currentUser } = useAuth()
  const [formData, setFormData] = useState({
    proofOfLivingWage: '',
    declaration: false,
    noteToUs: ''
  })
  const [error, setError] = useState(null)
	const navigate = useNavigate()

  const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const res = await service.patch(`/eateries/my/${id}`, currentUser)
      console.log(res)
			navigate("/account")
		} catch (error) {
			setError(e.message)
		}
	}
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
			<form onSubmit={handleSubmit}>
      <h4>become repuTable</h4>
				<label htmlFor="proofOfLivingWage">please attach proof that you are a living wage employer</label>
        <input
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					value={formData.proofOfLivingWage}
					type="text"
					id="proofOfLivingWage"
					name="proofOfLivingWage"
				/>
				<label htmlFor="noteToUs">additional information (optional)</label>
        <input
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					value={formData.noteToUs}
					type="text"
					id="noteToUs"
					name="noteToUs"
				/>
				<label htmlFor="declaration">Please tick the box below to declare all the information you have provided is accurate.</label>
        <input
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					value={formData.declaration}
					type="checkbox"
					id="declaration"
					name="declaration"
				/>
				<button>join us!</button>
			</form>
    </>
  )
}

export default BecomeReputable