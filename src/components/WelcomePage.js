import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage({ logo }) {

    let navigateTo = useNavigate();

    function nav() {
        navigateTo("/main")
    }

    setTimeout(() => {
        nav()
    }, 1900)

    return (
        <div className="logo-div">
         <img src={logo} id="logo" onClick={() => navigateTo("/main")}></img>
        </div>
    )
}

export default WelcomePage