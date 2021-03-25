import React from "react";
import notetaker from "../assets/Website.gif"
import gamefinder from "../assets/gamefinder.gif"
import vandermode from "../assets/Vandermodegif.gif"
import menu from "../assets/MenuMaqr.gif"
import money from "../assets/Funnymoney.gif"
import NCC from "../assets/NCC.gif"


function MyPortfolio() {
    return (
        <div>
            <section class="tafblock">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Tafseer's Portfolio</h1>
                    </div>
                </div>
                <hr class="divider"></hr>
                <div class="row">
                    <div class="col-xl-6">
                        <h2>Vandermode Matrix Calc</h2>
                        <button><a target="_blank" href="https://github.com/tafseer-khan/FindingTheVanderModeMatrix">github</a></button>
                    <div class="row">
                        <img id="portfolioimg"src={vandermode} alt="Calculating Vandermode Matrix for given vectors"></img>
                    </div>
                </div>
                <div class="col-xl-6">
                    <h2>Note Taker App</h2>
                    <button><a target="_blank" href="https://github.com/tafseer-khan/Note_Taker">github</a></button>
                    <button><a target="_blank" href="https://tafnotetaker.herokuapp.com/">deployed</a></button>
                    <div class ="row">
                    <img id="portfolioimg" src={notetaker} alt="NoteTaker"></img>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-6">
                        
                        <h2>GameFinder</h2>
                        <button><a target="_blank" href="https://github.com/danbushong/gameFinder">github</a></button>
                        <button><a target="_blank" href="https://danbushong.github.io/gameFinder/">deployed</a></button>
                        <div class ="row">
                        <img id="portfolioimg"src={gamefinder} alt="GameFinder"></img>
                        </div>
    
                    </div>
                    <div class="col-xl-6">
                        <h2>Menu Maq'r</h2>
                        <button><a target="_blank" href="https://github.com/tafseer-khan/UTA_BootCamp_Project_2">github</a></button>
                        <button><a target="_blank" href="https://menumaqr.herokuapp.com/">deployed</a></button>
                        <div class ="row">
                        <img id="portfolioimg" src={menu} alt="menumaqr"></img>
                        </div>

                    </div>

                </div>
                <div class="row">
                    <div class="col-xl-6">
                        <h2>Taf's Funny Money</h2>
                        <button><a target="_blank" href="https://github.com/tafseer-khan/PWA_Budget_Tracker">github</a></button>
                        <button><a target="_blank" href="https://tafs-funny-money.herokuapp.com/">deployed</a></button>
                        <div class ="row">
                        <img id="portfolioimg" src={money} alt="Funnymoney"></img>
                        </div>
 
                    </div>
                    <div class="col-xl-6">
                        <h2>Novice Coding Community</h2>
                        <button><a target="_blank" href="https://github.com/tafseer-khan/novice_code_community">github</a></button>
                        <button><a target="_blank" href="https://novice-code-community.herokuapp.com/">deployed</a></button>
                        <div class ="row">
                        <img id="portfolioimg" src={NCC} alt="NCC"></img>
                        </div>
    
                    </div>

                </div>


            </section>

        </div>
    )
}
export default MyPortfolio;