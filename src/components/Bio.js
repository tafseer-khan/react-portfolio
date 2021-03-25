import React from "react";
import me from "../assets/image0.jpg"

function Bio() {
    return (
        <div>
            <section class="tafblock">
                <div class="row">
                    <div class="col-lg-12">
                        <h1>Get to know Tafseer</h1>
                    </div>
                </div>
                <hr class="divider"></hr>
                <div class="row">
                    <div class ="col-xl-6">
                    <   img src={me} alt="Me!"></img>
                    </div>
                    <div class ="col-xl-6">
                    <p>
                Hello and welcome to my portfolio! A little about me: 
                <br></br>
                <br></br>
                I was born in Arkadelphia, Arkansas on November, 27 at exactly midnight. That makes me a turkey-baby! For those of you who do not know
                about this terminology, this means that every four years my birthday lands on Thanksgiving, and because of this, Thanksgiving has been a very important
                holiday for me. 
                <br></br>
                Since then I have moved all over. The states I have lived in are: Arkansas, New York, Oregon, Texas, and California. I recently moved back to Austin, Texas from 
                Irvine, California. Prior to Irvine I was going to school at Texas Tech University where I studied Mathematics. 
                <br></br>
                A few of my hobbies include playing video games, thrill-seeking, traveling, and trying new food!
                <br></br>
                My favorite video game is: <strong>World of Warcraft</strong>
                <br></br>
                My next thrill to chase is: <strong>Sky-diving</strong>
                <br></br>
                My favorite destination is: <strong>Paris</strong>
                <br></br>
                My favorite restaurant is: <strong>Juniper and Ivy</strong>
                 </p>
                    </div>

                </div>

            </section>

        </div>
    )
}
export default Bio;