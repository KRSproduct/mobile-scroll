		new fullpage('#fullPage', {
			autoScrolling: true,
			navigation: true
		})

		/*ANIMATION*/

var firstScroll = new TimelineMax();
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	triggerHook: 0.8,
	duration: 300
})

.setTween(firstScroll)
.setPin('.trigger1')
.addIndicators()
.addTo(controller);


firstScroll
.to('.bottle', 10, {x: 0, y: 400})
.to('.bottle',10, {scale: 1.5}, "-= 9")

