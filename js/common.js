		new fullpage('#fullPage', {
			autoScrolling: true,
			navigation: true
		})

		/*ANIMATION*/

var firstScroll = new TimelineMax();
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: '.trigger1',
	triggerHook: 0.7,
	duration: '100%'
})

.setTween(firstScroll)
.setPin('.trigger1')
.addIndicators()
.addTo(controller);


firstScroll
.to('.bottle', 5, {x: 0, y: 500})
.to('.bottle',5, {scale: 1.5})

