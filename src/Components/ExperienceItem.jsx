function ExperienceItem({companyName,role,date,details,image,companyLink}){
    return(
        <div className="experienceItem flexItems">
            <div className="imageLocation flexItems">
                <img className="experienceImg" onClick={() => window.open(companyLink)} src={image} alt={companyName + " logo"} />
            </div>
            <div className="content flexItems">
                <p className="subheading black">{companyName}</p>
                <p className="smallSubheading black italic">{role}</p>
                <p className="smallSubheading black">{date}</p>
                <p className="smallSubheading notBold black">{details}</p>
            </div>
        </div>
    )
}

export default ExperienceItem