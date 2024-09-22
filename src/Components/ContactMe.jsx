//Importing the images in for socials
import { useState } from "react";
import githubLogo from "../Images/githubLogo.jpg";
import linkedInLogo from "../Images/linkedInLogo.jpg";

function ContactMe() {
  //Usestate variables to stores the inputs
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  //Function to send me an email, using the form
  function sendEmail() {
    window.open(
      `mailto:danielstewarts2004@gmail.com?subject=${message}&body=${title}`
    );
  }

  return (
    <div id="ContactMe" className="screen">
      <p className="heading">ContactMe</p>
      <div className="contactLeft">
        <p className="boldRegular">Email : </p>
        <p className="regular">danielstewarts2004@gmail.com</p>
        <p className="boldRegular">Socials : </p>
        <div className="socialsLine">
          <img src={linkedInLogo} alt="Linked In Logo and Link" />
          <img src={githubLogo} alt="Github Logo and Link" />
        </div>
      </div>
      <div className="contactRight">
        <p className="subheading">Send an Email</p>
        <form
          action="http://postmail.invotes.com/send"
          method="post"
          id="email_form"
        >
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="text" placeholder="Message"></textarea>
          <input type="hidden" name="access_token" value="abc123" />

          <input type="hidden" name="success_url" value="." />
          <input type="hidden" name="error_url" value=".?err=1" />

          <input id="submit_form" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
