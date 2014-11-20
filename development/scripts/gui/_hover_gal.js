Hover = function(){
	this.settings={
		pics_hovers: $('.imgs_hovers'),
	};
};
Hover.prototype.init= function(){
	var self = this;
	self.bind();
};
Hover.prototype.bind= function(){
	var self = this,
		s = self.settings;
	
	s.pics_hovers.hover(function(){
		var id= $(this).attr('id');
		$('#'+id).stop().animate({opacity:1}, 250, 'easeInOutQuad');
	},function(){
		var id= $(this).attr('id');
		$('#'+id).stop().animate({opacity:0}, 250, 'easeInOutQuad');
	});
};