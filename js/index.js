// Your code goes here

`mouseover`
//updating the nav
Array.from(document.links).forEach(function (link) {
    link.addEventListener("mouseover", function (event) {
    link.style.color = "#17A2B8";
   link.style.textTransform = "Uppercase"; 
    setTimeout(function() {
    event.target.style.color = "";
    event.target.style.textTransform = "";
  }, 500);
}, false)
})

//updating Intro paragraph
const introContent= document.querySelector('.intro')
const introText = introContent.querySelector('p')
const introHead = introContent.querySelector('h2')
introText.addEventListener("mouseover", function(event){
  event.target.style.background = "#FED049";
  setTimeout(function() {
      event.target.style.background = "";
    }, 500);
  }, false)
  introHead.addEventListener("mouseover", function(event){
    event.target.style.color = "#FED049";
    event.target.style.textTransform = "Uppercase"
    setTimeout(function() {
        event.target.style.color = "";
        event.target.style.textTransform = "";
      }, 500);
    }, false)

   
  //updating logo
const headerContainer= document.querySelector('.main-navigation')
const headerLogo = headerContainer.querySelector('h1')
headerLogo.addEventListener("mouseover", function(event){
  event.target.style.color = "#fff";
  setTimeout(function() {
      event.target.style.color = "";
    }, 100);
  }, false)

   //updating content-section
   const contentSection= document.querySelector('.content-section')
 const textSection= contentSection.querySelectorAll('.text-content')
    textSection[0].addEventListener("mouseover", function(event){
    textSection[0].style.background = "#c39e5c";
    setTimeout(function() {
        textSection[0].style.background = "";
      }, 500);
      
    }, false)
   
    * `Toogle`
    * `Mouseenter`
  //updating lower Header
  const bodyContent= document.querySelector('.content-destination')
  const bodyHead= bodyContent.querySelector('h2')
  bodyHead.addEventListener("mouseenter", function(event){
    alert("Pick your preferred location here");
  })

 //updating footer
 const footerLevel= document.querySelector('.footer')
 const footerText= footerLevel.querySelector('p')
    footerText.addEventListener("mouseover", function(event){
    event.target.style.background = "#fed049";
    event.target.style.color = "#007580";
      event.target.style.textTransform = "Uppercase"
    setTimeout(function() {
        event.target.style.background = "";
        event.target.style.color = "";
        event.target.style.textTransform = "";
      }, 500);
    }, false)

    * `mousedown`
     //Updating Images
     const imgBorder = introContent.querySelector('img')
     imgBorder.addEventListener("mousedown", function(event){
     imgBorder.style.border = "10px solid #ffbe0f";
     setTimeout(function() {
         imgBorder.style.border = "5px solid grey";
       }, 500);
     }, false)
 
     * `mouseup`
    //Updating Body Images
    const imgBodyBorder = document.querySelector('.content-destination img')
    imgBodyBorder.addEventListener("mouseup", function(event){
    imgBodyBorder.style.border = "10px solid #8ac4d0";
    setTimeout(function() {
        event.target.style.border = "5px solid #cdc733";
      }, 500);
    }, false)

    const contentImg = document.querySelector('.content-section img')
    contentImg.addEventListener("mouseover", function(event){
    contentImg.style.border = "10px solid #007580";
    setTimeout(function() {
        event.target.style.border = "";
      }, 500);
    }, false)

    
  * `scroll`
    const bodyWheel= document.querySelector('body')
  bodyWheel.querySelector.addEventListener("wheel", function(event){
    bodyWheel.style.background = "lightblue";
  })

  * `dblclick`
  //updating header img
  const destinationSec= document.querySelector('.content-pick')
  const destinationContent = destinationSec.querySelector('p')
    destinationContent[0].addEventListener("dblclick", function(event){
    destinationContent.style.color = "purple";
    setTimeout(function() {
        destinationContent.style.color = "";
      }, 500);
    }, false)
// 

    * `click`
    //updating the entire body
      document.addEventListener("click", function(event){
        event.target.style.background = "#cdc733";
      setTimeout(function() {
          event.target.style.background = "";
        }, 1000);
      }, false)
    
    //   propagation
      * `keydown`
      const fullPage = document.body;
      const highlightedCont = document.querySelector(".home");
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            fullPage.style.background = ("#ddd");
        }
    })

    highlightedCont.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            highlightedCont.style.color = "yellow";
            event.stopImmediatePropagation();
            fullPage.style.background = ("#ddd");
        }
    });
            