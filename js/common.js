		new fullpage('#fullPage', {
			autoScrolling: true,
			navigation: true,
			scrollingSpeed: 700,
		})

		/*ANIMATION*/

var firstScroll = new TimelineMax();
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	triggerHook: 0.8,
	duration: 0
})

.setTween(firstScroll)
.setPin('.trigger1')
.addIndicators()
.addTo(controller);


firstScroll
.to('.bottle', 1, {x: 0, y: 450})
.to('.bottle',1, {scale: 1.5}, "-=1")

