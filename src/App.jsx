import { Routes, Route } from "react-router-dom"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Oops from "./pages/Oops"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import Layout from "./components/General/Layout"
import HomeFeed from "./components/General/HomeFeed"
import Welcome from "./components/General/Welcome"
import EateryDetailed from "./components/Eateries/EateryDetailed"
import Guidelines from "./pages/Guidelines"
import ContactUs from "./pages/ContactUs"
import UserAccount from "./pages/UserAccount"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Welcome/>}/>
					<Route path="/eateries" element={<HomeFeed/>}/>
					<Route path="/guidelines" element={<Guidelines/>}/>
					<Route path="/contactus" element={<ContactUs/>}/>
					<Route path="/signin" element={<Signin/>}/>
					<Route path="/signup" element={<Signup/>}/>
					<Route path="/eateries/:id" element={<EateryDetailed/>}/>
					
					<Route path="/account" element={<UserAccount/>}/>
				</Route>
			<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}

export default App
