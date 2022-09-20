import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import BackButton from "../components/Navbar/BackButton";
import Footer from "../components/General/Footer";
const Oops = () => {
  return (
    <>
      <Navbar />
      <BackButton />
      <h1>404 - page not found</h1>
      <Link to="/eateries">Click here to return to homepage</Link>
      <Footer />
    </>
  );
};

export default Oops;
