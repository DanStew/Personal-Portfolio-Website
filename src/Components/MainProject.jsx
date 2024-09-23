function MainProject({image,title,description,skills,liveLink,githubLink,finished}){
    return(
        <div className="mainProject">
            <img src={image} alt={title + "project image"} />
            <div className="projectContent">
                {!finished? 
                    <div className="unfinished">
                        <div className="background">
                            <div className="yellow unfinishedColor"></div>
                            <div className="black unfinishedColor"></div>
                            <div className="yellow unfinishedColor"></div>
                            <div className="black unfinishedColor"></div>
                            <div className="yellow unfinishedColor"></div>
                            <div className="black unfinishedColor"></div>
                        </div>
                        <div className="unfinishedWriting">
                            <p className="boldRegular">Not Finished</p>
                        </div>
                    </div> 
                    : <div style={{display:"none"}}></div>
                }
                <p className="subheading">{title}</p>
                <p className="regular">{description}</p>
                {/* Displaying the skills onto the project */}
                <div className="skillsLine">
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
                <div className="buttonArea">
                    {liveLink != "" ? <button onClick={() => window.open(liveLink)}>Live</button> : <div display={{display:"none"}}></div>}
                    <button onClick={() => window.open(githubLink)}>Github</button>
                </div>
            </div>
        </div>
    )
}

export default MainProject