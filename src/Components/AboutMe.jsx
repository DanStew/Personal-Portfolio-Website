import linkedIn from "../Images/linkedInLogo.jpg"

function AboutMe(){
    return(
        <div id="aboutMe" className="screen">
            <p id="AboutMeTitle" className="heading">About Me</p>
            <div className="content flexDisplay noGap">
                <div className="photoArea flexItems">
                    <img className="photoAreaImg" src={linkedIn} alt="Photo of Me" />
                </div>
                <div id="InfoArea" className="infoArea flexDisplay column smallHeightGap flexItems">
                    <p className="subheading">Hello, my name is Daniel Stewart. I am currently a second year student studying Computer Science at the University of Leicester.</p>
                    <p className="subheading">I have a keen interest in  Web Development, Python programs, AI and Data Science but also always looking to expand my coding knowledge.</p>
                    <p className="subheading">I am most experience making websites using React and Firebase however currently am aiming to expand my knowledge into other areas, hopefully learning throughout the journey.</p>
                </div>
            </div>
            <div id="Skills"></div>
        </div>
    )
}

export default AboutMe