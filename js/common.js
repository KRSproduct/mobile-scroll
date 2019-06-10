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
	})

.setTween(firstScroll)
.setPin('.trigger1')
.addIndicators()
.addTo(controller);


firstScroll
.to('.bottle', 0.5, {x: 0, y: 300})
.to('.bottle',0.5, {scale: 1.5}, "-=0.5")

