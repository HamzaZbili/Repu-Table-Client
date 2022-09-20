import { useContext } from "react"
import UserContext from "./UserContext"

// This function is used to avoid having to import useContext in every file where we need it

const useAuth = () => {
	return useContext(UserContext)
}

export default useAuth