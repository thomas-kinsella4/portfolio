import React, { useState } from "react";


function NavBar() {
    // "https://avatars.dicebear.com/api/male/281.svg?mood[]=surprised"
    // "https://avatars.dicebear.com/api/male/281.svg?mood[]=sad"

    // maybe have github/blog/social media links??? amd link to my resume?? //
    // const [miniMood, setMiniMood] = useState("surprised")
    const [moodsIndex, setMoodsIndex] = useState(0);

    const moods = ["happy", "sad", "surprised"]
    setTimeout(() => {
        setMoodsIndex(Math.floor(Math.random() * 3))
        console.log(moodsIndex)
    }, 1300)


    return (
        <>
        <div className="intro-div">
        <img id="mini-me" src={`https://avatars.dicebear.com/api/male/281.svg?mood[]=${moods[moodsIndex]}`}></img>
        <div className="animation-container">
        <p className="intro-text">Hi! I'm
        <div className="type-my-name">Thomas Kinsella</div>
        </p> 
        </div>
        </div>
        <div className="nav-div">
        <button className="nav-btn">About Me</button>
        <button className="nav-btn">Projects</button>
        <button className="nav-btn">Skills</button>
        <button className="nav-btn">Contact</button>
        </div>
        </>
    )
}

export default NavBar;