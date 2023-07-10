import Nav from "../components/nav";
import Footer from "../components/footer";
import vanceHZImage from '../Images/vanceHZ.png'
import womanVideo from '../Images/Woman.mp4'
import video2 from '../Images/0001-0049.mp4'
import cameraVideo from '../resources/pexels-cottonbro-studio-2795388-3840x2160-25fps.mp4'

const HorizonPage = () => {
    return ( <body onLoad={script2}>
        <div class="background">
            <div class="backing">
               <Nav/>
                <div class="buttons">
                    <div class="circle green">
    
                    </div>
                    <div class="circle red">
    
                    </div>
                    <div class="circle blue">
    
                    </div>
                    <div class="circle black">
    
                    </div>
                </div>
            </div>
        </div>
        <div class="lower">
            <div class="blur-cover cover-green">
                <div class="Horizon-logo">
                    <img src={vanceHZImage}/>
                </div>
                <div class="horizontal center">
                    <div class="grid-Hz-z">
                        <div class="camera-image shadow hidden-grow">
                            <div class="bottomText">
                                <h1 class="heading">45MP</h1>
                                <h1 class="heading-white">Camera</h1>
                            </div>
    
                            <video src={womanVideo} type="video/mp4" muted class="vid video"/>
    
                        </div>
                        <div class="grid-Vt">
                        <div class="detail-image image1 shadow hidden-grow">
                            <div class="bottomText">
                                <h1 class="heading">4K</h1>
                                <h1 class="heading-white">Display</h1>
                            </div>
                            <video src={video2} type="video/mp4" muted class="vid video"/>
                        </div>
                        <div class="detail-image image2 shadow hidden-grow">
                            <div class="bottomText">
                                <h1 class="heading"></h1>
                                <h1 class="heading-white">Portrait mode</h1>
                            </div>
                            <video src={cameraVideo} type="video/mp4"
                                muted class="vid1 video" loop>
                            </video>
                        </div>
                    </div>
                    </div>
                </div>
    
    
            </div>
        </div>
        <Footer/>
    </body>);
}
 

function script2(){
    let clip = document.querySelector(".vid")
let clip1 = document.querySelector(".vid1")

let backdrop = document.querySelector('.backing');

let blueButton = document.querySelector('.blue');
let redButton = document.querySelector('.red');
let blackButton = document.querySelector('.black');
let greenButton = document.querySelector('.green');

let blurCover = document.querySelector('.blur-cover');

// nav---
let hamburger = document.querySelector('.hamburger');
let dropmenu = document.querySelector('.button-show');

blueButton.addEventListener('click',function (e) {
   backdrop.className = "backing";
   backdrop.classList.add("bluedrop");
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-blue");
});

redButton.addEventListener('click',function (e) {
   backdrop.className = "backing"
   backdrop.classList.add("reddrop")
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-red");
});

blackButton.addEventListener('click',function (e) {
   backdrop.className = "backing"
   backdrop.classList.add("blackdrop")
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-black");
});

greenButton.addEventListener('click',function (e) {
   backdrop.className = "backing"
   backdrop.classList.add("greendrop")
   blurCover.className = "blur-cover";
   blurCover.classList.add("cover-green");
});
// Video --------------------------------------------------------------------------------------------------
/* Adding the event list_2eners on the video to play/pause the video. */
clip.addEventListener("mouseover", function (e) {
   clip.play();
});

clip1.addEventListener("mouseover", function (e) {
   clip1.play();
})
/* Applying the mouse out event to pause the video */
clip.addEventListener("mouseout", function (e) {
   clip.currentTime = 0;
   clip.pause();
   // clip.currentTime = 0;
   
})
clip1.addEventListener("mouseout", function (e) {
   clip1.currentTime = 0;
   clip1.pause();
   
})
// animations on scroll
const observer = new IntersectionObserver((entries) =>{
   entries.forEach((entry) => {
       if(entry.isIntersecting){
           entry.target.classList.add('show');
       }
   })
});
let firstPlay = true;

//Video Observer
const videoObserver = new IntersectionObserver((entries) =>{
  if (firstPlay){
   entries.forEach((entry) => {
       console.log(entry.target)
       if(entry.isIntersecting && firstPlay){
           entry.target.play();
           firstPlay = false;
       }
   })
} }
);

let expanded = true;

const hiddenElements = document.querySelectorAll('.hidden , .hidden-left, .hidden-right, .hidden-center, .hidden-center-1 , .hidden-center-2 , .hidden-center-3 , .hidden-down, .hidden-grow, .hidden-background, .hidden-up');
const videoPlay = document.querySelectorAll('video');

videoPlay.forEach((el) => videoObserver.observe(el));
hiddenElements.forEach((el) => observer.observe(el));

hamburger.addEventListener('click',function (e) {
   dropmenu.classList.add("top-bar-show")
});



}

export default HorizonPage;