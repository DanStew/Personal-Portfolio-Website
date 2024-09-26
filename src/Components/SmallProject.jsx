import githubLogo from "../Images/githubLogo.jpg"

function SmallProject({title,description,skills,githubLink,finished}){

    return(
        <div className="smallProject">
            <div className="headerLine">
                <p className="boldRegular black">{title}</p>
                <img className="circleImg smallProjectImg" onClick={() => window.open(githubLink)}src={githubLogo} alt="Link to Github" />
            </div>
            <div className="content">
                <p className="regular black">{description}</p>
                {/* Displaying the skills onto the project */}
                <div className="skillsLine flexDisplay smallWidthGap">
                    {/* Looping through every one of the skills */}
                    {skills.map((skill) => {
                        return(
                            <div key={title+skill}>
                                <p className={"boldRegular black " + skill}>{skill}</p>
                            </div>    
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SmallProject