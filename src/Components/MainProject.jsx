function MainProject({image,title,description,skills,liveLink,githubLink,documentation}){
    return(
        <div className="mainProject">
            <img className="mainProjectImg" src={image} alt={title + "project image"} />
            <div className="projectContent flexDisplay column verySmallGap">
                <p className="subheading black">{title}</p>
                <p className="regular black">{description}</p>
                {/* Displaying the skills onto the project */}
                <div className="skillsLine flexDisplay smallWidthGap">
                    {/* Looping through every one of the skills */}
                    {skills.map((skill) => {
                        return(
                            <div key={title+skill}>
                                <p className={"boldRegular " + skill}>{skill}</p>
                            </div>    
                        )
                    })}
                </div>
                {/* Displaying the buttons and links to the user */}
                <div className="buttonArea flexDisplay smallWidthGap">
                    {liveLink != "" ? <button className="mainProjectButton" onClick={() => window.open(liveLink)}>Live</button> : <div display={{display:"none"}}></div>}
                    <button className="mainProjectButton" onClick={() => window.open(githubLink)}>Github</button>
                    {documentation != "" ? <button className="mainProjectButton" onClick={() => window.open(documentation)}>Documentation</button> : <div display={{display:"none"}}></div>} 
                </div>
            </div>
        </div>
    )
}

export default MainProject