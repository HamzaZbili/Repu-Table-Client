import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Oops from "./pages/Oops"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import Layout from "./components/General/Layout"
import Home from "./components/General/Home"
import Welcome from "./components/General/Welcome"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Welcome/>}/>
					<Route path="/home" element={<Home/>}/>
					<Route path="/signin" element={<Signin/>}/>
					<Route path="/signup" element={<Signup/>}/>
				</Route>
			<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}

export default App
