import Skill from "./Skill"

//Importing the images needed to make the skills
import LinkedInLogo from "../Images/linkedInLogo.jpg"

function Skills(){
    return(
        <div id="skills" className="screen">
            <p className="heading">My Skills</p>
            <div className="skillsArea">
                <div className="skillsRow">
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                </div>
                <div className="skillsRow">
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                </div>
                <div className="skillsRow">
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                </div>
                <div id="LastSkillRow" className="skillsRow">
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/>
                    <Skill img={LinkedInLogo} text={"Linked In"}/> 
                    {/* Making some empty skills, to position the skills above correctly in the row */}
                    <div className="empty"></div>
                    <div className="empty"></div>
                </div>
            </div>
            <div id="Projects"></div>
        </div>
    )
}

export default Skills