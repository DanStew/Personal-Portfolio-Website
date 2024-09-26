function ExperienceItem({companyName,role,date,details,image,companyLink}){
    return(
        <div className="experienceItem flexItems">
            <div className="imageLocation flexItems">
                <img onClick={() => window.open(companyLink)} src={image} alt={companyName + " logo"} />
            </div>
            <div className="content flexItems">
                <p className="subheading black">{companyName}</p>
                <p className="boldRegular black italic">{role}</p>
                <p className="boldRegular black">{date}</p>
                <p className="regular black">{details}</p>
            </div>
        </div>
    )
}

export default ExperienceItem