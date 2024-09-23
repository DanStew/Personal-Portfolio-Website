import myCV from "../DanielStewartCV.pdf"
import githubLogo from "../Images/githubLogo.jpg"
import linkedInLogo from "../Images/linkedInLogo.jpg"

function Footer(){
    return(
        <div className="Footer banner">
            <p className="subheading footerText">Designed and Built by Daniel Stewart</p>
            <div className="footerLinks">
                <a href={myCV} target="_blank"><button><span className="material-symbols-outlined">file_open</span><p className="boldRegular">Download CV</p></button></a>
                <img onClick={() => window.open("https://github.com/DanStew")}src={githubLogo} alt="Open my Github" />
                <img onClick={() => window.open("https://www.linkedin.com/in/daniel-stewart-025107257/")}src={linkedInLogo} alt="Open my Linked In" />
            </div>
        </div>
    )
}

export default Footer