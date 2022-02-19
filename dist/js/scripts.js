$(() => {
	$(".videoLink").click(() => {
		$('html, body').animate({
			scrollTop: $("#video").offset().top
		}, 1000);
	});
	$(".video2Link").click(() => {
		$('html, body').animate({
			scrollTop: $("#video2").offset().top
		}, 1000);
	});
	$(".usersLink").click(() => {
		$('html, body').animate({
			scrollTop: $("#users").offset().top
		}, 1000);
	});
	$(".closeMenu").click($("#closeButton").click);
	$("#loading").fadeOut();
});
