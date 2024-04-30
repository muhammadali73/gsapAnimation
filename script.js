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

        var path = "M 10 100 Q 500 100 990 100";
        var finalPath = "M 10 100 Q 500 100 980 100";

        var string = document.querySelector("#string");

        string.addEventListener("mousemove", function (dets) {
            path = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
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
