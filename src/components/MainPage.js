import React from "react";
import NavBar from "./NavBar";
import logo from "../thomasite_logo2.png"

function MainPage() {

    fetch(`url`)
    .then( res => res.json())
    .then( data => console.log(data))
    .catch( error => console.log(error.message));



    // have logo off to the side in the middle of the page and follow you down as you scroll, you can click on it and it autoscrollls you to the top of the page //

    return (
        <>
        <NavBar />
        <h1>Main </h1>

        {/* <img id="nav-logo" src={logo}></img> */}
        </>
    )
}

export default MainPage;