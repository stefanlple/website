
new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    navigationPosition: "left",
    anchors: ["section1", "section2", "section3", "section4"],
    controlArrows: false,
    slidesNavigation: true,
    scrollingSpeed: 1100,
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        
        const tl = new TimelineMax({delay:0.5});
       
        if(destination.index===0){
            const text= section.querySelectorAll("p,h1");
            const button= section.querySelectorAll("button,#blueunderlines");
            const whiteLotus=section.querySelector("#whitelotus")
            tl.from(text,0.8,{x:"-50",opacity:0});
            tl.from(button,0.6,{x:"-50",opacity:0},'-=0.4');
            tl.from(whiteLotus,0.6,{x:"200",opacity:0},'-=0.4')
        }
        if(destination.index===1){
            const text= section.querySelector(".subtitle");
            const button= section.querySelector("button");
            const cirle=section.querySelectorAll(".about,content")
            const p= section.querySelectorAll(".introduction,#underlinered")
            tl.from(text,0.8,{y:"-50",opacity:0});
            tl.from(button,0.6,{y:"50",opacity:0},'-=0.4');
            tl.from(cirle,0.6,{x:"-50",opacity:0},'-=0.8');
            tl.from(p,0.6,{x:"50",opacity:0},'-=0.8');
        }
        if(destination.index===2){
            const button= section.querySelectorAll("button,.transition2");
            tl.from(button,0.6,{y:"-100",opacity:0});
        }
        if(destination.index===3){
            const text= section.querySelectorAll("p");
            const text2= section.querySelectorAll("#blueunderlines,ul,#email");
            const letter= section.querySelectorAll("#letter")
            tl.from(text,0.8,{x:"-50",opacity:0});
            tl.from(text2,0.8,{x:"-50",opacity:0},"-=0.4");
            tl.from(letter,0.5,{x:"50",opacity:0},"-=0.4")
        }
    }
})

function copyToClipboard(){
    navigator.clipboard.writeText("stefanle01@yahoo.de")
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied to clipboard";
}

function outFunc(){
    const tooltip=document.getElementById("myTooltip");
    tooltip.innerHTML="Click to copy"
}