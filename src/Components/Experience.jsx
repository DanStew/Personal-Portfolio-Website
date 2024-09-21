import ExperienceItem from "./ExperienceItem"

//Importing in images needed for ExperienceItem
import linkedInLogo from "../Images/linkedInLogo.jpg"

function Experience(){
    return(
        <div id="Experience" className="screen">
            <p className="heading">Experience</p>
            <div className="experienceItems flexItems">
                <ExperienceItem 
                    companyName="Two Point Studios"
                    role="Dunno Yet"
                    date="Don't remember"
                    details="This and that"
                    image={linkedInLogo} 
                    companyLink="https://www.twopointstudios.com/"   
                />
            </div>
        </div>
    )
}

export default Experience