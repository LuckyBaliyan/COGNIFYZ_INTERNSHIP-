
function dynamicHeights(){
    const item = document.querySelectorAll(".item-side");

    item.forEach((i,indx)=>{
        i.style.height = (indx % 2 === 0)? "330px":"280px";
    })
};

document.addEventListener("DOMContentLoaded",function(){
    const limit = window.innerWidth;
    if(limit >= 600){
        dynamicHeights();
    }

    gsap.set("nav",{y:-100});
    gsap.set(".letter-wrapper",{y:400});
    gsap.set(".item-copy-wrapper p",{y:50});

    gsap.defaults({duration:1,ease:"power3.out"});
    const tl = gsap.timeline({pause:true,delay:0.5});

    tl.to(".letter-wrapper",{
        y:0,
        stagger:0.1,
    }).to(".header-item1",{
        left:"12vw"
    }).to(".header-item2",{
        right:"8vw"
    },"<").to(".item-main .item-img img",{
        clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
    },"<").to(".header-item1",{
        left:0,
        scale:1,
    }).to(".header-item2",{
        right:0,
        scale:1,
    },"<").to(".item-main .item-img img",{
        scale:1
    },"<").to(".item-side .item-img",{
        clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        stagger:0.1,
    },"<").to(
        ".header",{
            bottom:"-2em",
        },
        "<"
    ).to(".item-copy-wrapper p",{
        y:0,
        stagger:0.05,
    },"<").to("nav",{
        y:0,

    },"<");
});


