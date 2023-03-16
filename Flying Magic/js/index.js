let controller = new ScrollMagic.Controller(); //Initializing scroll animations
let timeline = new TimelineMax();

timeline
.fromTo('.bkg', 3, {y: -50}, {y: 0, duration: 3})
.fromTo('.cabin', 3, {y: -60, x: 20}, {y: -300, x: 20}, '-=3')
.to('.balloon', 3, {y: 100}, '-=3')
.fromTo('.cloud1', 3, {y: -50, x: -50}, {y: -50, x: 110}, '-=3')
.fromTo('.cloud2', 3, {y: -200, x: 300}, {y: -100, x: 0}, '-=3')
.to('.header-text', 3, {y: -100}, '-=3')
.to('.about', 3, {top: -50}, '-=3')
.fromTo('.river', 2, {y: -340, x: 33}, {y: -340, x: 496}, '-=3');
// .fromTo('.packs', 3, {y: 0}, {y: -200}, '-=3');



//Setting parameters for when to trigger the animations
let scene = new ScrollMagic.Scene({
    triggerElement: '.section-one',
    duration: '100%',
    triggerHook: 0,
})
.setTween(timeline)
.setPin('.section-one')
.addTo(controller);
