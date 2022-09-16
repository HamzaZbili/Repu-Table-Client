import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Oops from "./pages/Oops"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import Layout from "./components/Layout"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
				<Route path="/home" element={<Home/>}/>
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
				</Route>
				</Route>
				<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}

export default App
