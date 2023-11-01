import { Outlet } from "react-router-dom";
import Header from "../components/pageComponent/Header/Header.jsx";
import Footer from "../components/pageComponent/Footer/Footer.jsx";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;