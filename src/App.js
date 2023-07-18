import React from "react";
import { WorkExp } from "./components/WorkExperience/workExperience";
import { Education } from "./components/educations";
import { SocialMediaComponent } from "./components/socialMediaComponent/socialMedia";
import { Projects } from "./components/projects/projects";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="SocialMediaContainer">
                <SocialMediaComponent />
            </div>

            <div className="App_second">
                <h1>EXPERIENCE</h1>
                <WorkExp />
                <h1>PROJECT</h1>
                <Projects />
                <br />
                <br />
                <br />
                <br />
                <br />
                {/* <h1>EDUCATION</h1>
                <Education /> */}
            </div>
        </div>
    );
}

export default App;
