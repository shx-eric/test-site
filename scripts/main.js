let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";

// let myDom = document.querySelector("html");
// myDom.addEventListener("click",()=>{
//     alert("别点我！快走开！");
// });
let logo_img = document.querySelector('img');
logo_img.onclick = function(){
    let src = logo_img.getAttribute('src');
    if(src === "images/web-logo.jpg"){
        logo_img.setAttribute("src","images/web-logo2.jpg");
    }else{
        logo_img.setAttribute("src","images/web-logo.jpg");
    };
};