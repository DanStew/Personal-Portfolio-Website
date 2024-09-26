import Skill from "./Skill"

//Importing the images needed to make the skills
import cssLogo from "../Images/cssLogo.jpg"
import emailJsLogo from "../Images/emailJsLogo.jpg"
import firebaseLogo from "../Images/firebaseLogo.jpg"
import htmlLogo from "../Images/htmlLogo.jpg"
import javaLogo from "../Images/javaLogo.jpg"
import javascriptLogo from "../Images/javascriptLogo.jpg"
import openCvLogo from "../Images/openCvLogo.jpg"
import pygameLogo from "../Images/pygameLogo.jpg"
import pysideLogo from "../Images/pysideLogo.jpg"
import pythonLogo from "../Images/pythonLogo.jpg"
import qmlLogo from "../Images/qmlLogo.jpg"
import qtLogo from "../Images/qtLogo.jpg"
import reactLogo from "../Images/reactLogo.jpg"
import sassLogo from "../Images/sassLogo.jpg"

function Skills(){
    return(
        <div id="skills" className="screen flexDisplay column heightGap">
            <p className="heading">My Skills</p>
            <div className="skillsArea flexDisplay column gap">
                <div className="skillsRow flexDisplay widthGap">
                    <Skill img={htmlLogo} text={"HTML"}/> 
                    <Skill img={javascriptLogo} text={"Javascript"}/>
                    <Skill img={cssLogo} text={"CSS"}/>
                    <Skill img={pythonLogo} text={"Python"}/> 
                    <Skill img={javaLogo} text={"Java"}/> 
                </div>
                <div className="skillsRow flexDisplay widthGap">
                    <Skill img={reactLogo} text={"React"}/>
                    <Skill img={firebaseLogo} text={"Firebase"}/>
                    <Skill img={pysideLogo} text={"PySide"}/> 
                    <Skill img={qmlLogo} text={"QML"}/>
                    <Skill img={qtLogo} text={"Qt"}/>
                </div>
                <div id="LastSkillRow" className="skillsRow flexDisplay widthGap">
                    <Skill img={pygameLogo} text={"Pygame"}/>
                    <Skill img={openCvLogo} text={"OpenCV"}/>
                    <Skill img={emailJsLogo} text={"Email JS"}/>
                    <Skill img={sassLogo} text={"SASS"}/> 
                    {/* Making an empty skills so there are all properly formatted */}
                    <div className="empty"></div>
                </div>
            </div>
            <div id="Projects"></div>
        </div>
    )
}

export default Skills