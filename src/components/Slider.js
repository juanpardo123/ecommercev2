// function Carousel() {
//   useEffect(() => {
//     let carouselSlider = document.querySelector(".carousel__slider");
//     let list = document.querySelector(".carousel__list");
//     let item = document.querySelectorAll(".carousel__item");
//     let list2;

//     const speed = 0.5;

//     const width = list.offsetWidth;
//     let x = 0;
//     let x2 = width;

//     function clone() {
//       list2 = list.cloneNode(true);
//       carouselSlider.appendChild(list2);
//       list2.style.left = `${width}px`;
//     }

//     function moveFirst() {
//       x -= speed;

//       if (width >= Math.abs(x)) {
//         list.style.left = `${x}px`;
//       } else {
//         x = width;
//       }
//     }

//     function moveSecond() {
//       x2 -= speed;

//       if (list2.offsetWidth >= Math.abs(x2)) {
//         list2.style.left = `${x2}px`;
//       } else {
//         x2 = width;
//       }
//     }

//     function hover() {
//       clearInterval(a);
//       clearInterval(b);
//     }

//     function unhover() {
//       a = setInterval(moveFirst, 10);
//       b = setInterval(moveSecond, 10);
//     }

//     clone();

//     let a = setInterval(moveFirst, 10);
//     let b = setInterval(moveSecond, 10);

//     carouselSlider.addEventListener("mouseenter", hover);
//     carouselSlider.addEventListener("mouseleave", unhover);
//   }, []);

//   return null; // Replace with your desired JSX for the Carousel component
// }

// function Carousel2() {
//   useEffect(() => {
//     let carouselSlider2 = document.querySelector(".carousel__slider2");
//     let list2 = document.querySelector(".carousel__list2");
//     let item2 = document.querySelectorAll(".carousel__item2");
//     let list22;

//     const speed2 = 0.5;

//     const width2 = list2.offsetWidth;
//     let x2 = 0;
//     let x22 = -width2;

//     function clone2() {
//       list22 = list2.cloneNode(true);
//       carouselSlider2.appendChild(list22);
//       list22.style.left = `${width2}px`;
//     }

//     function moveFirst2() {
//       x2 += speed2;

//       if (width2 >= Math.abs(x2)) {
//         list2.style.left = `${x2}px`;
//       } else {
//         x2 = 0 - x2;
//       }
//     }

//     function moveSecond2() {
//       x22 += speed2;

//       if (list22.offsetWidth >= Math.abs(x22)) {
//         list22.style.left = `${x22}px`;
//       } else {
//         x22 = 0 - x22;
//       }
//     }

//     function hover2() {
//       clearInterval(a2);
//       clearInterval(b2);
//     }

//     function unhover2() {
//       a2 = setInterval(moveFirst2, 10);
//       b2 = setInterval(moveSecond2, 10);
//     }

//     clone2();

//     let a2 = setInterval(moveFirst2, 10);
//     let b2 = setInterval(moveSecond2, 10);

//     carouselSlider2.addEventListener("mouseenter", hover2);
//     carouselSlider2.addEventListener("mouseleave", unhover2);
//   }, []);}

//   useEffect(() => {
//     Carousel();
//     Carousel2();
//   }, []);

