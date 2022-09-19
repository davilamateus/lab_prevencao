let c = function (el){
    return document.querySelector(el);
}

function load(){
    c('#banner').style.backgroundSize = "650px";
    c('#banner').style.opacity = "1";
    setTimeout(function(){ document.querySelector(".bannerText h2:first-child").style.opacity=1 }, 1000);
    setTimeout(function(){ document.querySelector(".bannerText h2:last-child").style.opacity=1 }, 1500);
    setTimeout(function(){ document.querySelector(".scriptText").style.opacity=1 }, 2000);

}


