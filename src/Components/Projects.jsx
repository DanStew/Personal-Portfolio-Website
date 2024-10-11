import MainProject from "./MainProject";
import SmallProject from "./SmallProject";
import { useState } from "react";

//Importing the images for the main projects
import goalTrackerApp from "../Images/goalTrackerApp.png";
import FMPlayerAnalysis from "../Images/FMPlayerAnalysis.png";
import RubixCubeSolver from "../Images/RubixCubeSolver.png";
import WindowCleaningWebsite from "../Images/WindowCleaningWebsite.jpg"

function Projects() {
  //Function to show more / less small projects
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="projects" className="screen">
      <p className="heading">My Projects</p>
      <div className="mainProjects flexDisplay widthGap">
        <MainProject
          image={goalTrackerApp}
          title="Goal Tracker App"
          description="Goal Tracking website which allows you to track your goals and make accounts to keep progress towards your goals.Also, includes some timetable functionality."
          skills={["React", "Firebase", "SASS"]}
          liveLink="https://goaltrackerapp.com/"
          githubLink="https://github.com/DanStew/Goal-Tracker---The-Life-Goal-Website"
          documentation="https://docs.google.com/document/d/1JcuXsHRb3mEEXcaSNcUsjgkKkjOe0Z5tdkFLGm_A_W4/edit?usp=sharing"
        />
        <MainProject
          image={FMPlayerAnalysis}
          title="FM Player Analysis"
          description="Python project which allows you to generate scores depending on players abilities on Football Manager. Also, it includes the functionality to change the attribute rankings."
          skills={["Python", "PySide", "Qt", "QML"]}
          liveLink="https://fm-player-analysis.firebaseapp.com/"
          githubLink="https://github.com/DanStew/FM-Player-Analysis-Website"
          documentation="https://docs.google.com/document/d/17KBypGlObteZeqYlGL5SN-GoMKiJxb37GyGyppDafEo/edit?usp=sharing"
        />
        <MainProject
            image={WindowCleaningWebsite}
            title="Window Cleaning Website"
            description="Window Cleaning Website made to promote a company. Includes contact forms, google reviews and google maps, implemented using multiple APIs and hosted online."
            skills={["React", "Firebase", "APIs","Git"]}
            liveLink="https://farnhamanddistrictwindowcleaning.uk/"
            githubLink="https://github.com/DanStew/Window-Cleaning-Website"
            documentation=""
            finished={false}
        />
        <MainProject
          image={RubixCubeSolver}
          title="Rubix Cube Solver"
          description="Website which allows you to input and control a Rubix Cube. Currently unfinished but have hopes of implementing some path finding algorithms to help the user solve the cubes"
          skills={["HTML", "Javascript", "CSS"]}
          liveLink=""
          githubLink="https://github.com/DanStew/RubixCubeSolver"
          documentation=""
        />
      </div>
      <div className="smallProjects flexDisplay widthGap">
        <SmallProject
          title="Personal Portfolio Website"
          description="Website made to exspress the projects I have made, and more about me."
          skills={["React", "SASS", "CSS Animations"]}
          githubLink="https://github.com/DanStew/Personal-Portfolio-Website"
          finished={true}
        />
        <SmallProject
          title="Java Bank Loan System"
          description="Application where the user is able to make an account and take out or track loans"
          skills={["Java"]}
          githubLink="https://github.com/DanStew/Bank-Loaning-System"
        />
        <SmallProject
          title="Binary Hexadecimal Converter"
          description="Python CLI allowing you to convert between Decimal, Binary and Hexadecimal numbers"
          skills={["Python"]}
          githubLink="https://github.com/DanStew/BinaryHexadecimalConverter"
          finished={true}
        />
        <SmallProject
          title="Twitter Clone"
          description="Website which implements some of the functionality of Twitter, Currently unfinished"
          skills={["React", "Firebase", "SASS"]}
          githubLink="https://github.com/DanStew/TwitterCloneProject"
          finished={false}
        />
        <SmallProject
          title="Practice Text Chat App"
          description="Website that allows you to create an account and privately chat with other users"
          skills={["React", "Firebase"]}
          githubLink="https://github.com/DanStew/PracticeTextChatApp"
          finished={true}
        />
        <SmallProject
          title="JavaScript Face Detection App"
          description="Simple Javascript project that uses a camera on a webpage and detects faces and exspressions."
          skills={["Javascript", "FaceAPI"]}
          githubLink="https://github.com/DanStew/Javascript-Face-Detection-App"
          finished={true}
        />
        <SmallProject
          title="Calculator Project"
          description="Python project that uses Tkinter to make a usable calculator app"
          skills={["Python", "Tkinter"]}
          githubLink="https://github.com/DanStew/Calculator-Project"
          finished={true}
        />
        <div className="showMore flexDisplay column">
          {showMore ? (
            <button
              id="ShowMoreLessButton"
              onClick={() => setShowMore(false)}
              className="showMoreLess"
            >
              <p className="heading black">Show Less</p>
            </button>
          ) : (
            <button
              id="ShowMoreLessButton"
              onClick={() => setShowMore(true)}
              className="showMoreLess"
            >
              <p className="heading black">Show More</p>
            </button>
          )}
          {/* Code use to display the additional projects */}
          {showMore ? (
            <div className="showMoreProjects flexDisplay widthGap">
              <SmallProject
                title="Random Number Sports"
                description="Collection of sport games made using P5 that uses random numbers to determine the outcome"
                skills={["P5"]}
                githubLink="https://github.com/DanStew/RandomNumberSports"
                finished={true}
              />
              <SmallProject
                title="League Table and Knockout Fixture Generator"
                description="Website that allows you to generate a football league table or knockout tournament"
                skills={["HTML", "Javascript", "CSS"]}
                githubLink="https://github.com/DanStew/Computer-Science-NEA"
              />
              <SmallProject
                title="Python Games"
                description="Collection of Python Games made using Pygame"
                skills={["Python", "Pygame"]}
                githubLink="https://github.com/DanStew/Python-Games"
              />
              {/* This is how you make an empty small project, to format them correctly 
                                <div className="emptySmallProject"></div>
                            */}
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>
        {/* Code to show the show more / less projects, depending on users actions  */}
      </div>
      <div id="Experience"></div>
    </div>
  );
}

export default Projects;
