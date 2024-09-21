import MainProject from "./MainProject"
import SmallProject from "./SmallProject"

//Importing the images for the main projects
import LinkedInLogo from "../Images/linkedInLogo.jpg"
import { useState } from "react"

function Projects(){

    //Function to show more / less small projects
    const [showMore, setShowMore] = useState(false)

    return(
        <div id="Projects" className="screen">
            <p className="heading">My Projects</p>
            <div className="mainProjects">
                <div className="mainProjectRow">
                    <MainProject 
                        image={LinkedInLogo}
                        title="Test Project 1"
                        description="This is a test"
                        skills={["Skill 1", "Skill 2","Skill 3"]}
                        liveLink="google.com"
                        githubLink="https://github.com/"
                    />
                    <MainProject 
                        image={LinkedInLogo}
                        title="Test Project 2"
                        description="This is a test"
                        skills={["Skill 1", "Skill 2","Skill 3"]}
                        liveLink=""
                        githubLink="https://github.com/"
                    />
                </div>
                <div className="mainProjectRow">
                    <MainProject 
                        image={LinkedInLogo}
                        title="Test Project 3"
                        description="This is a test"
                        skills={["Skill 1", "Skill 2","Skill 3"]}
                        liveLink="google.com"
                        githubLink="https://github.com/"
                    />
                    <MainProject 
                        image={LinkedInLogo}
                        title="Test Project 4"
                        description="This is a test"
                        skills={["Skill 1", "Skill 2","Skill 3"]}
                        liveLink="google.com"
                        githubLink="https://github.com/"
                    />
                </div>
                <div className="mainProjectRow">
                    <MainProject 
                        image={LinkedInLogo}
                        title="Test Project 5"
                        description="This is a test"
                        skills={["Skill 1", "Skill 2","Skill 3"]}
                        liveLink="google.com"
                        githubLink="https://github.com/"
                    />
                    <div className="emptyMainProject"></div>
                </div>
            </div>
            <div className="smallProjects">
                <div className="smallProjectRow">
                    <SmallProject 
                        title="Small Project 1"
                        description="This is a description"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        githubLink="https://github.com/"
                    />
                    <SmallProject 
                        title="Small Project 2"
                        description="This is a description"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        githubLink="https://github.com/"
                    />
                    <SmallProject 
                        title="Small Project 3"
                        description="This is a description"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        githubLink="https://github.com/"
                    />
                </div>
                <div className="smallProjectRow">
                    <SmallProject 
                        title="Small Project 4"
                        description="This is a description"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        githubLink="https://github.com/"
                    />
                    <SmallProject 
                        title="Small Project 5"
                        description="This is a description"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        githubLink="https://github.com/"
                    />
                    <SmallProject 
                        title="Small Project 6"
                        description="This is a description"
                        skills={["Skill 1", "Skill 2", "Skill 3"]}
                        githubLink="https://github.com/"
                    />
                </div>
                {/* Code to show the show more / less projects, depending on users actions  */}
                {showMore? <button onClick={() => setShowMore(false)} className="showMoreLess"><p className="heading">Show Less</p></button> : <button onClick={() => setShowMore(true)} className="showMoreLess"><p className="heading">Show More</p></button>}
                {/* Code use to display the additional projects */}
                {showMore? 
                    <div className="showMoreProjects">
                        <div className="smallProjectRow">
                            <SmallProject 
                                title="Small Project 7"
                                description="This is a description"
                                skills={["Skill 1", "Skill 2", "Skill 3"]}
                                githubLink="https://github.com/"
                            />
                            <SmallProject 
                                title="Small Project 8"
                                description="This is a description and the helo djdjjsd asjd aassn dsjdsndn MSMDSM dnsdns d"
                                skills={["Skill1", "Skill2", "Skill3","Skill4"]}
                                githubLink="https://github.com/"
                            />
                            <div className="emptySmallProject"></div>
                        </div>
                    </div> 
                    : <div style={{display:"none"}}></div>
                }
            </div>
        </div>
    )
}

export default Projects