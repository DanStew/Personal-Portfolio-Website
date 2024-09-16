//Importing images into page
import githubLogo from "../Images/githubLogo.jpg"
import linkedInLogo from "../Images/linkedInLogo.jpg"

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
                {/* Typing animation here */}
                <div className="HomeScreenInfo">
                    <p className="subheading">I'm a current CS Undergrad at the University of Leicester and am currently in my Second Year. I have a keen interest in Web Development, AI and Data Science.</p>
                </div>
                <div className="HomeScreenLinks">
                    <p className="subheading">Check out my Socials : </p>
                    <button><span class="material-symbols-outlined">file_open</span> Download My CV</button>
                    <img src={githubLogo} alt="Open my Github" />
                    <img src={linkedInLogo} alt="Open my Linked In" />
                </div>
                <button><a href="#AboutMe">Explore More about Me</a></button>
            </div>
        </div>
    )
}

export default HomeScreen