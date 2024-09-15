import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

 
const Root = () => {
    return (
        <div>
            <Nav/>
        <Outlet></Outlet>
        <Footer/>
        </div>
    );
};

export default Root;