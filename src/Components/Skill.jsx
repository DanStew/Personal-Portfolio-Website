function Skill({img,text}){
    return(
        <div className="skill flexDisplay column verySmallGap">
            <img className="circleImg skillsImg" src={img} alt={text + " logo"} />
            <p className="subheading black">{text}</p>
        </div>
    )
}

export default Skill