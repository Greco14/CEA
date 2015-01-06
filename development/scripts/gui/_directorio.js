Directorio = function(){
	this.settings={
		is_animating: false,
		card: $('.holdIntegrante'),
		main_img: $('.mainPic'),
		backInfo: $('.backInfo'),
		pop_up: $('.containerPopUp'),
		closePop: $('.closePop'),
		hover_img: $('.hover_img'),
		vermas: $('.vermas'),


	};
	this.tlShowinfo = new TimelineLite();
	this.tlHiddeinfo = new TimelineLite();
	this.tlopenPopup = new TimelineLite();
	this.tlclosePopup = new TimelineLite();
};
Directorio.prototype.init= function(){
	var self= this;
	self.bind();
};
Directorio.prototype.bind= function(){
	var self= this,
		s = self.settings;
		s.card.mouseenter(function(){
			var laId = $(this).attr('id');
			// self.animation('show-info', laId);
			$('#'+laId+'-red').stop().animate({
				left: 0,
			}, 250, 'easeInOutQuad');
		});
		s.card.mouseleave(function(){
			var laId = $(this).attr('id');
			// self.animation('hide-info', laId);
			$('#'+laId+'-red').stop().animate({
				left: '100%',
			}, 250, 'easeInOutQuad');
		});
		s.vermas.on('click', function(){
			self.animation('open-pop');
		});
		s.hover_img.on('click', function(){
			self.animation('open-pop');
		});
		s.closePop.on('click', function(){
			self.animation('close-pop')
		});

};
Directorio.prototype.animation= function(actions, laId){
	var self= this,
		s = self.settings;

		switch(actions){
			case 'show-info':
				if(s.is_animating){
					return false;
				};
				self.tlShowinfo.to( $('#'+laId+'-red') , 0.25,{
					left: 0, 
					ease: Cubic.easeOut,
					onComplete: function(){
						s.is_animating = false;
						return s.is_animating;
					}
				});
				
				break;
			case 'hide-info':
				if(s.is_animating){
					return false;
					};
				self.tlHiddeinfo.to( $('#'+laId+'-red') , 0.25,{
					left: '100%', 
					ease: Cubic.easeOut,
					onComplete: function(){
						s.is_animating = false;
						return s.is_animating;
					}
				});
					
				break;
			case 'open-pop':
				s.pop_up.css({opacity: 0, display: 'block'});
				self.tlopenPopup.to(s.pop_up, 0.75,{
					opacity: 1,
					ease: Cubic.easeOut
				});

				break;
			case 'close-pop':
				self.tlclosePopup.to(s.pop_up, 0.75,{
					opacity: 0,
					ease: Cubic.easeOut,
					onComplete : function (){
						s.pop_up.css({display: 'none'});
					}
				});
			break;
		};
};