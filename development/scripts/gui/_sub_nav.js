Sub_nav = function(){
	this.settings={
		sub_nav: $('.underNav'),
		btn_lowme: $('.yes-sub'),
		other_subs: $('.innerSub'),
		btn_upme: $('.no-sub'),
	};
};
Sub_nav.prototype.init = function() {
	var self = this;
	self.bind();
};
Sub_nav.prototype.bind = function() {
	var self = this,
		s = self.settings;

	s.btn_lowme.mouseenter(function(){
		var laId = $(this).attr('id');
		s.other_subs.css('display','none');
		$('#'+laId+'_sub').css('display','block');
		s.sub_nav.stop().animate({height: 125}, 250, 'easeInOutQuad');

	});
	s.sub_nav.mouseleave(function(){
		s.sub_nav.stop().animate({height: 0}, 250, 'easeInOutQuad');
	});
	s.btn_upme.mouseenter(function(){
		s.sub_nav.stop().animate({height: 0}, 250, 'easeInOutQuad');
	});
};