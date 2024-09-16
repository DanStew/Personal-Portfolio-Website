function Skill({img,text}){
    return(
        <div className="skill">
            <img src={img} alt={text + " logo"} />
            <p className="subheading">{text}</p>
        </div>
    )
}

export default Skill