function VerticalMenu({showMenu,setShowMenu}){
    return(
        <div className="verticalMenu">
            {showMenu? 
                <div className="banner menu">
                    <div className="tabs">
                        <ul>
                            <li className="listItem"><a onClick={() => setShowMenu(false)} href="#HomeScreen">Home</a></li>
                            <li className="listItem"><a onClick={() => setShowMenu(false)} href="#AboutMe">About Me</a></li>
                            <li className="listItem"><a onClick={() => setShowMenu(false)} href="#Skills">Skills</a></li>
                            <li className="listItem"><a onClick={() => setShowMenu(false)} href="#Projects">Projects</a></li>
                            <li className="listItem"><a onClick={() => setShowMenu(false)} href="#Experience">Experience</a></li>
                            <li className="listItem"><a onClick={() => setShowMenu(false)} href="#ContactMe">Contact</a></li>
                            <li className="listItem" onClick={() => setShowMenu(false)}>Close Banner</li>
                        </ul>
                    </div>
                </div> 
                : <div style={{display:"none"}}></div>
            }
        </div>
    )
}

export default VerticalMenu