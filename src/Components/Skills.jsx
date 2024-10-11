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
            <div className="skillsArea flexDisplay gap">
                    <Skill img={htmlLogo} text={"HTML"}/> 
                    <Skill img={javascriptLogo} text={"Javascript"}/>
                    <Skill img={cssLogo} text={"CSS"}/>
                    <Skill img={pythonLogo} text={"Python"}/> 
                    <Skill img={javaLogo} text={"Java"}/> 
                    <Skill img={reactLogo} text={"React"}/>
                    <Skill img={firebaseLogo} text={"Firebase"}/>
                    <Skill img={pysideLogo} text={"PySide"}/> 
                    <Skill img={qmlLogo} text={"QML"}/>
                    <Skill img={qtLogo} text={"Qt"}/>
                    <Skill img={pygameLogo} text={"Pygame"}/>
                    <Skill img={openCvLogo} text={"OpenCV"}/>
                    <Skill img={emailJsLogo} text={"Email JS"}/>
                    <Skill img={sassLogo} text={"SASS"}/> 
            </div>
            <div id="Projects"></div>
        </div>
    )
}

export default Skills