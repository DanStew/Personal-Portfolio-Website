import { useEffect, useState } from "react"

function Header({showMenu,setShowMenu}){

    const [currentlyHovered, setCurrentlyHovered] = useState("HomeScreen")

    useEffect(() => {
        const setCurrentlyHoveringOver = () => {
            let sections = ["HomeScreen","AboutMe","Skills","Projects","Experience","ContactMe"]
            for (let i = 0; i < sections.length; i++){
                document.getElementById(sections[i]).onmouseover = () => {
                    if (sections[i] == currentlyHovered){return}
                    replaceCurrentlyHovered(sections[i])
                }
            }
        }

        //Setting up the section hover functionality to animate the header
        setCurrentlyHoveringOver()
    },[currentlyHovered])

    //Function to replace the currentlyHovered element with another one
    function replaceCurrentlyHovered(newHovered){
        document.getElementById(newHovered + "Tab").classList.add("active")
        document.getElementById(currentlyHovered + "Tab").classList.remove("active")
        setCurrentlyHovered(newHovered)
    }

    return(
        <div className="Header banner flexItems">
            {/* Banner used when screen is wide */}
            <div className="horizontalBanner flexItems">
                <div className="title flexItems">
                    <p className="subheading">Daniel Stewart</p>
                </div>
                <div className="tabs flexItems">
                    {/* Just added the onclicks, they don't fully work right now */}
                    <div onClick={() => replaceCurrentlyHovered("HomeScreen")} id="HomeScreenTab" className="tab flexItems active"><a href="#HomeScreen">Home</a></div>
                    <div onClick={() => replaceCurrentlyHovered("AboutMe")} id="AboutMeTab" className="tab flexItems"><a href="#AboutMe">About Me</a></div>
                    <div onClick={() => replaceCurrentlyHovered("Skills")} id="SkillsTab" className="tab flexItems"><a href="#Skills">Skills</a></div>
                    <div onClick={() => replaceCurrentlyHovered("Projects")} id="ProjectsTab" className="tab flexItems"><a href="#Projects">Projects</a></div>
                    <div onClick={() => replaceCurrentlyHovered("Experience")} id="ExperienceTab" className="tab flexItems"><a href="#Experience">Experience</a></div>
                    <div onClick={() => replaceCurrentlyHovered("ContactMe")} id="ContactMeTab" className="tab flexItems"><a href="#Contact">Contact</a></div>
                </div>
            </div>
            {/* Banner used when screen is small */}
            <div className="verticalBanner flexItems">
                <div className="title flexItems">
                    <p className="subheading">Daniel Stewart</p>
                </div>
                {/* Making the settings icon */}
                <span onClick={() => setShowMenu(!showMenu)} className="material-symbols-outlined flexItems">menu</span>
            </div>
        </div>
    )
}

export default Header