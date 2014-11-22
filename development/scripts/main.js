Main = {
	init: function(){
		hover = new Hover();
		hover.init();
		sub_nav = new Sub_nav();
		sub_nav.init();
	},
};
$(function(){
	Main.init();
});