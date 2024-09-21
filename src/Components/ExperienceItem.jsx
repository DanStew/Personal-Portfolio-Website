function ExperienceItem({companyName,role,date,details,image,companyLink}){
    return(
        <div className="experienceItem flexItems">
            <div className="imageLocation flexItems">
                <img onClick={() => window.open(companyLink)} src={image} alt={companyName + " logo"} />
            </div>
            <div className="content flexItems">
                <p className="subheading">{companyName}</p>
                <p className="boldRegular role">{role}</p>
                <p className="boldRegular date">{date}</p>
                <p className="regular">{details}</p>
            </div>
        </div>
    )
}

export default ExperienceItem