document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    function initAnimations() {
        gsap.from("#page3 #box1", {
            scale: 0,
            duration: 1,
            rotate: 720,
            scrollTrigger: {
                trigger: "#page3 #box1",
                start: "top 50%",
                scrub: 2,
            }
        });

        gsap.to("#page2 h1", {
            transform: "translateX(-155%)",
            scrollTrigger: {
                trigger: "#page2",
                start: "top 0%",
                end: "top -150%",
                scrub: 2,
                pin: true
            }
        });

        var finalPath = "M 10 100 Q 500 100 980 100";

        var string = document.querySelector("#string");

        string.addEventListener("mousemove", function (dets) {
            var path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 990 100`;
            gsap.to("svg path", {
                attr: { d: path },
                duration: .3,
                ease: "power3.out"
            });
        });

        string.addEventListener("mouseleave", function () {
            gsap.to("svg path", {
                attr: { d: finalPath },
                duration: 1.5,
                ease: "elastic.out(1,0.2)"
            });
        });
    }
    initAnimations();
});

var main = document.querySelector("body");
var cursor = document.querySelector("#cursor");
var buttonDiv = document.querySelector(".button");

main.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: .3,
    })
});


buttonDiv.addEventListener("mouseenter",function(dets){
    cursor.innerHTML = "clickz me!"
    gsap.to(cursor,{
        scale:2,
        backgroundColor: "black"
    })
});
buttonDiv.addEventListener("mouseleave",function(dets){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "white"
    })
});