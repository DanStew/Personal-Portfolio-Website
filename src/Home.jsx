import { useEffect } from "react"

//Importing components into the function
import Header from "./Components/Header";
import HomeScreen from "./Components/HomeScreen"
import AboutMe from "./Components/AboutMe"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"
import Experience from "./Components/Experience"
import ContactMe from "./Components/ContactMe"
import Footer from "./Components/Footer";

function Home(){

    //Onload, this function will run, hiding the loading screen
    useEffect(() => {
        //Scroll event to load items onto the screen as you scroll down to them
        const handleScroll = () => {
            //Every item that you want to be revealed is given the .reveal class
            var reveals = document.querySelectorAll(".reveal")
            //Seeing if the item needs to be revealed
            for (var i=0; i < reveals.length; i++){
                var windowHeight = window.innerHeight
                var revealTop = reveals[i].getBoundingClientRect().top
                var revealPoint = 50;
                if (revealTop < windowHeight - revealPoint){
                    reveals[i].classList.add("active")
                }   
                //If you only want the reveal to happen once on a website, remove this else statement  
                else{
                    reveals[i].classList.remove("active")
                }
            }
        }

        //Implementing the loader item
        const loader = document.querySelector(".loader");
        //Hiding the loader
        loader.classList.add("loader-hidden")
        //Removing it entirely from your code
        loader.addEventListener("transitionend", () => {
            console.log("Transition ended")
        })
        
        //Adding the scroll event listener
        window.addEventListener("scroll",handleScroll)
    },[])


    return(
        <div>
            <Header />
            <div className="mainBody">
                <div><HomeScreen /></div>
                <div className="reveal"><AboutMe/></div>
                <div className="reveal"><Skills/></div>
                <div className="reveal"><Projects/></div>
                <div className="reveal"><Experience/></div>
                <div className="reveal"><ContactMe/></div>
            </div>
            <Footer />
            <div className="loader"></div>
        </div>
    )
}

export default Home