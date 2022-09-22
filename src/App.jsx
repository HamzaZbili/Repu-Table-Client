import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Oops from "./pages/Oops";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import Layout from "./components/General/Layout";
import HomeFeed from "./components/General/HomeFeed";
import Welcome from "./components/General/Welcome";
import EateryDetailed from "./components/Eateries/EateryDetailed";
import Guidelines from "./pages/Guidelines";
import ContactUs from "./pages/ContactUs";
import BecomeReputableForm from "./components/Forms/BecomeReputableForm";
import EateryDetailedOwner from "./components/Eateries/EateryDetailedOwner";
import EateryAdmin from "./pages/EateryAdmin";
import EateryAccount from "./pages/EateryAccount";
import UserAdmin from "./pages/UserAdmin";
import SingleUser from "./components/Users/SingleUser";
import PostNewEatery from "./components/Forms/PostNewEatery";
import MyReviews from "./pages/MyReviews";
import ModEateryView from "./components/Eateries/ModEateryView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/eateries" element={<HomeFeed />} />
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/eateries/:id" element={<EateryDetailed />} />
          <Route element={<PrivateRoute />}>
            <Route path="/mod/users" element={<UserAdmin />} />
            <Route path="/mod/users/:id" element={<SingleUser />} />
            <Route path="/mod/eateries/:id" element={<ModEateryView />} />
            <Route path="/eateries/my/:id" element={<EateryDetailedOwner />} />
            <Route
              path="/eateries/join/:id"
              element={<BecomeReputableForm />}
            />
            <Route path="/mod/eateries" element={<EateryAdmin />} />
            <Route path="/eateries/my" element={<EateryAccount />} />
            <Route path="/eateries/my/new" element={<PostNewEatery />} />
            <Route path="/eateries/reviews/my/:id" element={<MyReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Oops />} />
      </Routes>
    </div>
  );
}

export default App;
