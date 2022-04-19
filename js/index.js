window.onscroll = () => {
    let nav = document.getElementById("navigation-bar");
    // console.log("@@@@@",nav);

    if(this.scrollY < 300){
        nav.className = "nav-bar";
    }else{
        nav.className = "scroll-nav-bar";
    }
}