import ExperienceItem from "./ExperienceItem"

//Importing in images needed for ExperienceItem
import twoPointStudios from "../Images/twoPointStudios.jpg"

function Experience(){
    return(
        <div id="experience" className="screen">
            <p className="heading">Experience</p>
            <div className="experienceItems flexDisplay column heightGap flexItems">
                <ExperienceItem 
                    companyName="Two Point Studios"
                    role="QA Tester"
                    date="July 2022 - July 2022"
                    details="1 week work experience where I joined the QA Testing team to help identify, test and report any bugs in their game, reporting back to the QA Team. I also learned how to formally write a QA Report on any new bugs that I would find."
                    image={twoPointStudios} 
                    companyLink="https://www.twopointstudios.com/"   
                />
            </div>
            <div id="ContactMe"></div>
        </div>
    )
}

export default Experience