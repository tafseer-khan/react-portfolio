import React from "react";
import resume from "../assets/TafseerKhanResume-1.png"
function MyResume() {
        
    return (
        <div>
            <div>
                <a href={resume} download>
                    <span id= "downloadlink">
                    Click me to Download!
                    </span>
                <img id="resume"src={resume} alt="resume"></img>
                </a>
            </div>


        </div>
    )
}
export default MyResume;