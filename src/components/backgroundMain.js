import React from "react";
import vanceSlateImage from '../Images/vanceSlate.png'
import vanceHZImage from '../Images/vanceHZ.png'
import vanceWatchImage from '../Images/vanceWatch.png'

const backgroundMain = () => {
    return (    <div class="background-Main2">

    <div class="showing1 hidden-background">
        <img src={vanceSlateImage} class="vanceHorizon hidden-left"/>
        <h2 class="hidden-left">"Unleash Your Creativity"</h2>
    </div>
    <div class="showing2 hidden-up">
        <img src={vanceHZImage} class="vanceHorizon"/>
        <h2>"Reach for new horizons"</h2>
    </div>
    <div class="lower-main">

        <div class="horizontal center-main">
            <div class="grid-Hz">
                <div class="showing3 hidden-center-3">
                    <h1>Great things are yet to come...</h1>
                </div>
                <div class="showing4 hidden-center-3">
                    <img src={vanceWatchImage} class="vanceHorizon"/>
                </div>
            </div>
        </div>
    </div>
    <div class="horizontal center-main ">
        <div class="grid-Hz">
            <div class="showing4 hidden-center-3">
            </div>
            <div class="showing3 hidden-center-3">
                <h1>Great things are yet to come...</h1>
            </div>

        </div>
    </div>
</div> );
}
 
export default backgroundMain;