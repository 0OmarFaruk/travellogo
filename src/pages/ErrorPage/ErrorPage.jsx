import Navbar from "../../components/headerComponent/Navbar/Navbar.jsx";
import error from "../../assets/yalantis-interactive-404.gif";

const ErrorPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar></Navbar>
      <img className="w-full" src={error} alt="" />
    </div>
  );
};

export default ErrorPage;
