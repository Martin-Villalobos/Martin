let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.bg2', 3 ,{y:-600})
    .to('.bg1', 3 ,{y:-300},'=-3')
    .to('.bg', 3 ,{y:50},'=-3')
    .to('.content', 3 ,{top:'0%'},'=-3');

let scene = new ScrollMagic.Scene({
    triggerElement:'Secction', 
    duration: "100%",
    triggerHook:0,
})
    .setTween(timeline)
    //.setPin("secction")
    .addTo(controller)
