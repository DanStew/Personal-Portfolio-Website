import { useEffect } from "react"

function Home(){

    //Onload, this function will run, hiding the loading screen
    useEffect(() => {
        const loader = document.querySelector(".loader");
        //Hiding the loader
        loader.classList.add("loader-hidden")
        //Removing it entirely from your code
        loader.addEventListener("transitionend", () => {
            console.log("Transition ended")
        })
    },[])

    return(
        <div>
            <p>Hello</p>
            <div className="loader"></div>
        </div>
    )
}

export default Home