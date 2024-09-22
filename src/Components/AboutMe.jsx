import linkedIn from "../Images/linkedInLogo.jpg"

function AboutMe(){
    return(
        <div id="AboutMe" className="screen">
            <p id="AboutMeTitle" className="heading">About Me</p>
            <div className="content">
                <div className="photoArea flexItems">
                    <img src={linkedIn} alt="Photo of Me" />
                </div>
                <div className="infoArea flexItems">
                    <p className="subheading">ipsum dolor sit amet consectetur adipisicing elit. Voluptate est vitae quaerat nulla id inventore autem repudiandae veniam at ipsa adipisci, sunt fugiat voluptates quasi delectus ab? Enim commodi sed eligendi, aperiam unde accusamus sapiente vel consectetur illum dicta, nobis blanditiis cum? Quae necessitatibus molestiae soluta eveniet magnam, assumenda impedit.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe