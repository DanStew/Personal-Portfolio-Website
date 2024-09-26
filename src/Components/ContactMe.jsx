//Importing the images in for socials
import { useEffect, useState } from "react";
import githubLogo from "../Images/githubLogo.jpg";
import linkedInLogo from "../Images/linkedInLogo.jpg";
import emailjs from "@emailjs/browser";

function ContactMe() {
  //Usestate variables to stores the inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  //Code to store success / error message
  const [errorMsg, setErrorMsg] = useState("");

  //Useeffect to initalise emailjs with my public key
  useEffect(() => {
    emailjs.init("iRAIRQra4UvUAAWb1");
  }, []);

  //Function to send me an email, using the form
  function sendEmail() {
    //Resetting the error message
    setErrorMsg("");
    //Validating any inputs
    if (name == "" || email == "" || title == "" || message == "") {
      setErrorMsg("One or more email inputs are empty...");
      return;
    }

    //Sending the email
    emailjs
      .send("service_jp7hzwl", "template_4ftmvv4", {
        from_name: name,
        email_id: email,
        title: title,
        message: message,
      })
      .then(
        (response) => {
          //Noting success
          setErrorMsg("Email Successfully Sent");
          //Resetting values
          setName("");
          setEmail("");
          setTitle("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error);
          setErrorMsg("An error has occurred when sending the email");
        }
      );
  }

  return (
    <div id="contactMe" className="screen">
      <p className="heading black flexItems">Contact Me</p>
      <div className="contactArea flexDisplay widthGap flexItems">
        <div className="contactLeft flexItems">
          <p className="heading black">Email : </p>
          <p className="subheading black">danielstewarts2004@gmail.com</p>
          <p className="heading black">Socials : </p>
          <div className="socialsLine flexDisplay gap">
            <img className="circleImg contactImg rotating" src={githubLogo} onClick={() => window.open("https://github.com/DanStew")} alt="Linked In Logo and Link" />
            <img className="circleImg contactImg rotating" src={linkedInLogo} onClick={() => window.open("https://www.linkedin.com/in/daniel-stewart-025107257/")} alt="Github Logo and Link" />
          </div>
        </div>
        <div className="contactRight flexDisplay column noGap">
          <p className="heading black">Send me a Message</p>
          <form className="flexDisplay column smallHeightGap" action="#">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your Name..."
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter your Email..."
            />
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter the Title..."
            />
            <textarea rows="4" onChange={(e) => setMessage(e.target.value)} value={message} placeholder="Enter your Message..."></textarea>
            <button onClick={() => sendEmail()} type="button">Send Message</button>
          </form>
          {errorMsg != "" ? (
            <p className="error boldRegular">{errorMsg}</p>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
