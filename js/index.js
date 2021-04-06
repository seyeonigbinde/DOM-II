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
introText.addEventListener("mouseover", function(event){
  event.target.style.background = "#ddd";
  setTimeout(function() {
      event.target.style.background = "";
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

// const imgMouseOver = document.querySelectorAll("nav a")
// itemMouseOver.addEventListener("mouseover", function(event){
//     event.target.style.color = "red";
// })

  * `keydown`

  * `wheel`
  * `load`

    // document.addEventListener("load", function(event){
    // event.target.style.backgroundColor = "red";
    //     })
  * `focus`


//   const bodyText = document.querySelector('form');
//     form.addEventListener('focusin', (event) => {
//   event.target.style.background = 'pink';
// });
  * `resize`
  * `scroll`
  * `select`
  * `dblclick`
  //updating header img
  const introImg = introContent.querySelector('img')
    introImg.addEventListener("dblclick", function(event){
    event.target.style.borderRadius = "7%";
    setTimeout(function() {
        event.target.style.borderRadius = "";
      }, 500);
    }, false)
  `drag / drop`