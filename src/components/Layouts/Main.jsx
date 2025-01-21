import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div>
            {/* Header area start from here */}
            <Header></Header>
            {/* Header area end here */}

            {/* Outlet start from here */}
            <div className="my-10">
                <Outlet></Outlet>
            </div>
            {/* Outlet end here */}

            {/* Footer area start from here */}
            <Footer></Footer>
            {/* Footer area end here */}
        </div>
    );
};

export default Main;
