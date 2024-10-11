import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import { useEffect, useState } from "react";

const Layout = () => {
    const [bgColor, setBgColor] = useState("transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setBgColor("#fff");
            } else {
                setBgColor("transparent");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <Menu style={{ backgroundColor: bgColor }} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout;