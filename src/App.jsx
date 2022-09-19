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
import BecomeReputable from "./components/Forms/BecomeReputable"
import EateryDetailedOwner from "./components/Eateries/EateryDetailedOwner"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Welcome/>}/>
					<Route path="/signin" element={<Signin/>}/>
					<Route path="/signup" element={<Signup/>}/>
					<Route path="/eateries" element={<HomeFeed/>}/>
					<Route path="/guidelines" element={<Guidelines/>}/>
					<Route path="/contactus" element={<ContactUs/>}/>
					<Route path="/eateries/:id" element={<EateryDetailed/>}/>
					<Route element={<PrivateRoute />}>
							<Route path="/eateries/my/:id" element={<EateryDetailedOwner/>}/>
							<Route path="/eateries/join/:id" element={<BecomeReputable/>}/>
					</Route>
					<Route path="/account" element={<UserAccount/>}/>
				</Route>
			<Route path="*" element={<Oops />} />
			</Routes>
		</div>
	)
}

export default App
