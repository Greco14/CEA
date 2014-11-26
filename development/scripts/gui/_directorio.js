Directorio = function(){
	this.settings={
		is_animating: false,
		card: $('.holdIntegrante'),
		main_img: $('.mainPic'),
		backInfo: $('.backInfo'),


	};
	this.tlShowinfo = new TimelineLite();
	this.tlHiddeinfo = new TimelineLite();
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
			self.animation('show-info', laId);
		});
		s.card.mouseleave(function(){
			var laId = $(this).attr('id');
			self.animation('hide-info', laId);
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
		};
};