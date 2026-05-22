const topButton = document.querySelector("#topButton");

window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        topButton.classList.add("show");
    }else{
        topButton.classList.remove("show");
    }
});

topButton.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});