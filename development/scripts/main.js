Main = {
	init: function(){
		hover = new Hover();
		hover.init();
		sub_nav = new Sub_nav();
		sub_nav.init();
		directorio = new Directorio();
		directorio.init();
	},
};
$(function(){
	Main.init();
});