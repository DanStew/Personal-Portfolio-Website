//Importing images into page
import githubLogo from "../Images/githubLogo.jpg"
import linkedInLogo from "../Images/linkedInLogo.jpg"

import {ReactTyped} from "react-typed";

//Importing my CV to use
import myCV from "../DanielStewartCV.pdf"

function HomeScreen(){
    return(
        <div id="HomeScreen" className="screen">
            <div className="backgroundSquares">
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
                <div className="animatedSquare"></div>
            </div>
            <div className="homeScreenBody flexItems">
                <p className="heading">Hello, My Name is </p>
                <p className="nameTitle title">Daniel Stewart</p>
                <p className="heading typingAnimation">
                    I'm a{" "}
                    <ReactTyped
                        strings={["Web Developer", "Coder", "Student"]}
                        typeSpeed={100}
                        loop
                        backSpeed={80}
                        cursorChar=" />"
                        showCursor={true}
                    />
                </p>
                {/* Typing animation here */}
                <div className="HomeScreenInfo">
                    <p className="subheading">I'm a current CS Undergrad at the University of Leicester and am currently in my Second Year. I have a keen interest in Web Development, AI and Data Science.</p>
                </div>
                <p className="subheading">Check out my Socials : </p>
                <div className="HomeScreenLinks">
                    <a href={myCV} target="_blank"><button><span className="material-symbols-outlined">file_open</span><p className="subheading">Download My CV</p></button></a>
                    <img onClick={() => window.open("https://github.com/DanStew")}src={githubLogo} alt="Open my Github" />
                    <img onClick={() => window.open("https://www.linkedin.com/in/daniel-stewart-025107257/")}src={linkedInLogo} alt="Open my Linked In" />
                </div>
                <div className="explore">
                <a href="#ExploreButton"><button id="ExploreButton"><p className="subheading">Explore More about Me</p></button></a>
                </div>
            </div>
            <div id="AboutMe"></div>
        </div>
    )
}

export default HomeScreen