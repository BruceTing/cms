$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
	};

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.leftmenu').not($next).slideUp().parent().removeClass('open');
		};
	};

	new Accordion($('#accordion'), false);
	
	// change the background-color where we clicked a and removed background-color of other a
	$('.leftmenu a').bind('click', function(){
	    $('.leftmenu a:not(this)').removeClass('clckClass');
	    $(this).addClass('clckClass');
	});
	
});