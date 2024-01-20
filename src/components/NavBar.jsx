import React, { useEffect, useState } from "react";

function NavBar() {
    const [scroll, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
    });
    const clas = `min-h-[40px] m-auto z-10  w-full transition-all flex justify-between fixed ${
        scroll ? "bg-[#111]" : ""
    }`;
    return (
        <div className={clas}>
            <img
                src="https://www.freepnglogos.com/uploads/netflix-logo-drawing-png-19.png"
                alt="Logo"
                className="h-[35px] p-1 bg-transparent"
            />
            <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
                alt="Logo"
                className="h-[35px] p-1"
            />
        </div>
    );
}

export default NavBar;
